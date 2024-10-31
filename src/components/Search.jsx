import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase'; // Upewnij się, że ścieżka jest poprawna


function Search() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");

  // Funkcja do zapisywania pliku w Firebase Storage
  const handleFileUpload = async () => {
    if (!file) return;

    try {
      const customID = prompt("Podaj unikalne ID dla bazy danych:");
      const storageRef = ref(storage, `databases/${customID}/${file.name}`);
      await uploadBytes(storageRef, file);
      setFileName(file.name);
      alert("Plik został zapisany pomyślnie!");
    } catch (error) {
      console.error("Błąd podczas zapisywania pliku:", error);
    }
  };

 
  const fetchFileContent = async () => {
    const storage = getStorage();
    const filePath = "databases/123/Wyniki_UDP.txt";
    const fileRef = ref(storage, filePath);

    try {
      // Get the file's download URL
      const url = await getDownloadURL(fileRef);

      // Fetch the file content using the download URL
      const response = await fetch(url);
      const text = await response.text(); // Convert to text
      setFileContent(text);
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };


  return (
    <div>
      <h2>Search for repositories</h2>
      <input type="file" accept=".txt" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Zapisz plik</button>

      <button onClick={fetchFileContent}>Wyświetl zawartość pliku</button>
      <pre>{fileContent}</pre>
    </div>
  );
}

export default Search;
