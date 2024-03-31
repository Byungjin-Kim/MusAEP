# MusAEP

MusAEP, the Music Analysis and Education Platform, is a comprehensive web application designed for users of all ages, aiming to analyze the structure of uploaded music files and provide educational feedback on harmony, rhythm, and melody. Built with React for a dynamic and user-friendly frontend, and Python along with Node.js for backend processing, this platform strives to be an invaluable resource for musicians, music educators, and students alike. It offers deep insights into music theory and compositional techniques, making it accessible and beneficial to everyone from beginners to advanced learners.


## Features

### Music Analysis
- **BPM Detection**: Calculates the beats per minute of the music, essential for understanding the tempo.
- **Harmonic Analysis**: Identifies chords progression and key signatures, offering insights into the song's harmonic structure.
- **Instrument Composition and Texture Analysis**: Recognizes the instruments used and analyzes the texture of the music piece.

### Music Education
- **Music Theory Tutorials and Guides**: Provides tutorials on music theory concepts, helping users understand the fundamentals of music.
- **Practical Exercises and Quizzes**: Offers interactive exercises and quizzes based on the analyzed musical elements to reinforce learning.
- **Automated Feedback on User Music Projects**: Generates automated feedback on users' music projects, aiding in the improvement and development of musical skills.

## Installation

Ensure you have Python 3.8+, Node.js 12.0+, and npm (Node Package Manager) installed on your system to get started with the Music Analysis and Education Platform.

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
