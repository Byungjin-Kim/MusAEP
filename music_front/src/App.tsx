import React, { useCallback, useState } from 'react';
import './App.css';

const App: React.FC = () => {

  //state to store the selected file
  const [file, setFile] = useState<File | null>(null);

  //handler for drop event 
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file selection from file input
    const files = event.target.files;
    if (files && files[0]) {
      const uploadedFile = files[0];
      //check video file
      if (/\.(mp3|wav)$/i.test(uploadedFile.name)) {
        setFile(uploadedFile);
        // TODO: Handle file
        // make video preview URL 
      } else {
        alert('Please select an MP3 or WAV file.');
      }
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    // drag and rop file 
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const uploadedFile = event.dataTransfer.files[0];
      if (/\.(mp3|wav)$/i.test(uploadedFile.name)) {
        setFile(uploadedFile);
        // TODO: Handle file to send to server.
      } else {
        alert('Please drop an MP3 or WAV file.');
      }
    }
  }, []);

  // Handler for drag over event
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
    event.stopPropagation();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MusAEP</h1>
        <p>Music Analysis and Education Platform</p>
        <p>
          MusAEP is a web application designed to enrich music learning for all ages. It analyzes uploaded music files, providing insights into harmony, rhythm, and melody, and offers educational feedback. Ideal for musicians, educators, and students, MusAEP demystifies music theory and compositional techniques for both beginners and advanced learners.
        </p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search song or YouTube link"
          className="search-input" />

        <div className="hashtag-group">
          <span>#random</span>
          <span>#recent</span>
          <span>#trendy</span>
        </div>
      </div>

      <div className="file-upload-section" onDrop={handleDrop} onDragOver={handleDragOver}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".mp3,.wav"
        />
        {file && <p>File ready for analysis: {file.name}</p>}
      </div>
    </div>
  );
}

export default App;
