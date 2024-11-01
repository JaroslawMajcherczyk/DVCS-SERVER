import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import RepositoryDetails from './RepositoryDetails'; // Import component to view repository details

function Search() {
  const [repositories, setRepositories] = useState([]); // All public repositories
  const [filteredRepositories, setFilteredRepositories] = useState([]); // Repositories matching search query
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRepoId, setSelectedRepoId] = useState(null); // ID of selected repository for viewing details
  const db = getDatabase();

  useEffect(() => {
    // Fetch public repositories from Realtime Database
    const repoRef = ref(db, 'repositories');
    onValue(repoRef, (snapshot) => {
      const data = snapshot.val() || {};
      const publicRepos = Object.keys(data)
        .map((key) => ({ id: key, ...data[key] }))
        .filter((repo) => repo.isPublic === true);
      setRepositories(publicRepos);
      setFilteredRepositories(publicRepos); // Display all public repos initially
    });
  }, [db]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      // Filter repositories by name based on search query
      const filtered = repositories.filter((repo) =>
        repo.repositoryName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRepositories(filtered);
    } else {
      // If search query is less than 3 characters, reset the list
      setFilteredRepositories(repositories);
    }
  };

  const handleRepositoryClick = (repoId) => {
    setSelectedRepoId(repoId); // Set selected repository ID for viewing details
  };

  return (
    <div>
      <h2>Search Public Repositories</h2>
      <input
        type="text"
        placeholder="Search for a repository..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repo) => (
            <li key={repo.id}>
              <button onClick={() => handleRepositoryClick(repo.id)}>
                {repo.repositoryName}
              </button>
            </li>
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </ul>

      {/* Render RepositoryDetails if a repository is selected */}
      {selectedRepoId && <RepositoryDetails repoId={selectedRepoId} />}
    </div>
  );
}

export default Search;
