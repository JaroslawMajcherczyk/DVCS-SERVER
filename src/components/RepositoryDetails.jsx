import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

function RepositoryDetails({ repoId }) {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileContent, setFileContent] = useState("");
  const [currentPath, setCurrentPath] = useState(`databases/${repoId}`);
  const storage = getStorage();

  useEffect(() => {
    if (!repoId) return; // Ensure repoId is provided

    const listContents = async () => {
      const storageRef = ref(storage, currentPath);
      try {
        const folderSnapshot = await listAll(storageRef);
        const folderNames = folderSnapshot.prefixes.map((folderRef) => folderRef.name);
        const fileNames = folderSnapshot.items.map((fileRef) => fileRef.name);
        setFolders(folderNames);
        setFiles(fileNames);
      } catch (error) {
        console.error("Error listing contents:", error);
      }
    };
    listContents();
  }, [currentPath, repoId]);

  const fetchFileContent = async (fileName) => {
    const filePath = `${currentPath}/${fileName}`;
    const fileRef = ref(storage, filePath);

    try {
      const url = await getDownloadURL(fileRef);
      const response = await fetch(url);
      const text = await response.text();
      setFileContent(text);
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  const enterFolder = (folderName) => {
    setCurrentPath((prevPath) => `${prevPath}/${folderName}`);
    setFileContent("");
  };

  const goBack = () => {
    setCurrentPath((prevPath) => prevPath.split('/').slice(0, -1).join('/'));
    setFileContent("");
  };

  return (
    <div>
      <h2>Repository: {repoId}</h2>
      <h3>Current Path: {currentPath}</h3>
      <button onClick={goBack} disabled={currentPath === `databases/${repoId}`}>
        Go Back
      </button>

      <h3>Folders</h3>
      <ul>
        {folders.map((folder) => (
          <li key={folder}>
            <button onClick={() => enterFolder(folder)}>{folder}</button>
          </li>
        ))}
      </ul>

      <h3>Files</h3>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <button onClick={() => fetchFileContent(file)}>{file}</button>
          </li>
        ))}
      </ul>

      <h3>File Content</h3>
      <pre>{fileContent}</pre>
    </div>
  );
}

export default RepositoryDetails;
