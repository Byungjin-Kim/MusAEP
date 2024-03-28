# Music Analysis Platform

The Music Analysis Platform is a web application specifically designed to provide detailed analysis of uploaded music files. It offers insights into BPM (Beats Per Minute), harmonic structures, and instrument compositions. Utilizing React for the frontend within the `music_front` directory, this platform serves as an invaluable tool for musicians, producers, and music enthusiasts to explore the intricacies of music. The backend, powered by Python and Node.js, ensures robust data processing and analysis capabilities.

## Features

- **BPM Detection**: Accurately calculates the music's tempo in beats per minute, essential for understanding the rhythm.
- **Harmonic Analysis**: Identifies and analyses the harmonic structure, including key signatures and chord progressions, to uncover the music's underlying harmony.
- **Instrument Composition**: Detects and lists the instruments used in the piece, providing valuable insights into the arrangement and texture.

## Installation

Before you can run the Music Analysis Platform, make sure you have Python 3.8+, Node.js 12.0+, and npm (Node Package Manager) installed on your system.

```bash
# Clone the repository
git clone https://github.com/Byungjin-Kim/music-analysis-webapp.git
cd music-analysis-webapp

# Install dependencies for the backend
cd backend
pip install -r requirements.txt

# Navigate to the React frontend directory
cd ../music_front

# Install dependencies for the React frontend
npm install
