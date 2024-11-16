import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';

function RepositoryDetails({ repoId }) {
  const [repoName, setRepoName] = useState(""); // State to store repository name
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileContent, setFileContent] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const [baseCommitPath, setBaseCommitPath] = useState("");
  const [latestCommitName, setLatestCommitName] = useState("");
  const storage = getStorage();
  const db = getDatabase();

  useEffect(() => {
    if (!repoId) return;

    // Fetch repository name
    const repoRef = dbRef(db, `repositories/${repoId}`);
    onValue(repoRef, (snapshot) => {
      const repoData = snapshot.val();
      if (repoData && repoData.repositoryName) {
        setRepoName(repoData.repositoryName);
      }
    });

    const fetchLatestCommit = () => {
      const commitsRef = dbRef(db, `repositories/${repoId}/commits`);
      onValue(commitsRef, (snapshot) => {
        const commits = snapshot.val();
        if (!commits) return;

        // Determine the latest commit by timestamp
        const latestCommit = Object.entries(commits).reduce((latest, [id, data]) =>
          !latest || new Date(data.timestamp) > new Date(latest.timestamp) ? { id, ...data } : latest
        , null);

        if (latestCommit) {
          setLatestCommitName(latestCommit.message);
          const latestCommitPath = `databases/${repoId}/commits/${latestCommit.id}`;
          setBaseCommitPath(latestCommitPath);
          setCurrentPath(latestCommitPath);
          listContents(latestCommitPath); // Load the contents of the latest commit
        }
      });
    };

    fetchLatestCommit();
  }, [repoId, db, storage]);

  const fetchFileContent = async (fileName) => {
    const fileRef = ref(storage, `${currentPath}/${fileName}`);

    try {
      const url = await getDownloadURL(fileRef);
      const response = await fetch(url);
      setFileContent(await response.text());
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  const enterFolder = (folderName) => {
    const newPath = `${currentPath}/${folderName}`;
    setCurrentPath(newPath);
    setFileContent("");
    listContents(newPath);
  };

  const listContents = async (path) => {
    try {
      const snapshot = await listAll(ref(storage, path));
      setFolders(snapshot.prefixes.map((folderRef) => folderRef.name));
      setFiles(snapshot.items.map((fileRef) => fileRef.name));
    } catch (error) {
      console.error("Error listing contents:", error);
    }
  };

  const handleBreadcrumbClick = (index) => {
    const newPath = [baseCommitPath, ...currentPath.replace(baseCommitPath, "").split('/').slice(1, index + 1)].join('/');
    setCurrentPath(newPath);
    setFileContent("");
    listContents(newPath);
  };

  return (
    <div className='repoDetails_wrapper'>
      <h2 className='repoDetails_subheader'>Repository: {repoName}</h2> {/* Display repository name */}

      <h3 className='repoDetails_header'>Path Navigation</h3>
      <div className='repoDetails_container'>
        {[latestCommitName, ...currentPath.replace(baseCommitPath, "").split('/').slice(1)]
          .map((part, index) => (
            <span className='repoDetails_index' key={index}>
              <button className='repoDetails_buttonIndex' onClick={() => handleBreadcrumbClick(index)}>{part}</button>
              {index < currentPath.split('/').length - 1 && ' / '}
            </span>
        ))}
      </div>

      <h3 className='repoDetails_subheader'>Folders</h3>
      <ul className='repoDetails_mapContainer'>
        {folders.map((folder) => (
          <li className='repoDetails_keyContainer' key={folder}>
            <button className='repoDetails_buttonOpenFolder' onClick={() => enterFolder(folder)}>{folder}</button>
          </li>
        ))}
      </ul>

      <h3 className='repoDetails_subheader'>Files</h3>
      <ul className='repoDetails_mapContainer'>
        {files.map((file) => (
          <li className='repoDetails_keyContainer' key={file}>
            <button className='repoDetails_buttonOpenFolder' onClick={() => fetchFileContent(file)}>{file}</button>
          </li>
        ))}
      </ul>

      <h3 className='repoDetails_subheader'>File Content</h3>
      <pre className='repoDetails_fileContent'>{fileContent}</pre>
    </div>
  );
}

export default RepositoryDetails;
