import React, { useCallback, useState } from 'react';
import './App.css';

const App: React.FC = () => {

  //state to store the selected file
  const [file, setFile] = useState<File | null>(null);

  //handler for drop event 
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
    event.stopPropagation();

    // Check if files are dropped and take the first one
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const uploadedFile = event.dataTransfer.files[0];
      // Check the file extension for mp3 or wav format
      if (/\.(mp3|wav)$/i.test(uploadedFile.name)) {
        // If file is valid, update the state
        setFile(uploadedFile);
        // TODO: Handle the file upload (e.g., send it to the server)
      } else {
        // Alert the user if the file format is not supported
        alert('Please drop an MP3 or WAV file.');
      }
    }
  }, []);

  // Handler for drag over event
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MusAEP</h1>
        <p>Music Analysis and Education Platform</p>
      </header>

      <div className="search-section">
        <input type="text" placeholder="Search song or YouTube link" className="search-input" />

        <div className="hashtag-group">
          <span>#random</span>
          <span>#recent</span>
          <span>#trendy</span>
        </div>
      </div>

      <div className="video-preview">

      </div>

      {/* 기타 필요한 섹션이나 컴포넌트 추가 위치 */}

    </div>
  );
}

export default App;
