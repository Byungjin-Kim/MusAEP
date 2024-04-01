import React from 'react';
import './App.css'; // 스타일 정의는 App.css 파일에 추가하세요.

const App: React.FC = () => {
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
