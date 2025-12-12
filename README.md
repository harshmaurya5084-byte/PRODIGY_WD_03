# Task 03 : 🎮 Tic Tac Toe web apllication 
# Name: Harsh maurya
# live demo: https://harshmaurya5084-byte.github.io/PRODIGY_WD_03/
# prodigy infotech

# 🎮 Tic Tac Toe Game

A modern, interactive Tic Tac Toe web application built with HTML, CSS, and JavaScript. Play against a friend or challenge an intelligent AI opponent!

![Tic Tac Toe Game](https://img.shields.io/badge/Game-Tic%20Tac%20Toe-purple)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 Core Gameplay
- **Interactive Game Board** - Click to place X or O markers
- **Win Detection** - Automatically detects all winning combinations (rows, columns, diagonals)
- **Draw Detection** - Identifies tied games when the board is full
- **Game State Tracking** - Monitors current player, board state, and game status
- **Turn Indicators** - Clear display showing whose turn it is

### 🎮 Game Modes
- **Player vs Player (PvP)** - Play against a friend locally
- **Player vs AI (PvA)** - Challenge an intelligent computer opponent

### 🤖 AI Features
- Strategic decision making
- Attempts to win when possible
- Blocks opponent from winning
- Prefers center and corner positions
- Unpredictable move patterns for engaging gameplay

### 🎨 User Interface
- **Modern Design** - Beautiful gradient theme with purple, indigo, and pink colors
- **Smooth Animations** - Fade-in effects, hover transitions, and pulse animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Score Tracking** - Keeps track of wins for X, O, and draws
- **Winner Modal** - Celebration popup when a player wins
- **Mobile Vibration** - Haptic feedback on supported devices

### 🎨 Visual Highlights
- Gradient text effects
- Glowing hover states
- Winning cell animations with golden glow
- Interactive button effects
- Clean, minimalist design

## 📁 Project Structure

```
project 2/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Game logic and AI
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required!

### Installation

1. **Download the project files**
   ```
   - index.html
   - style.css
   - script.js
   ```

2. **Open the game**
   - Simply double-click on `index.html` or
   - Right-click → Open with → Your preferred browser

3. **Start playing!**
   - The game loads instantly, no setup needed

### Alternative: Run with Live Server (Optional)
If you're using VS Code:
```bash
# Install Live Server extension
# Right-click on index.html
# Select "Open with Live Server"
```

## 🎯 How to Play

### Basic Rules
1. The game is played on a 3x3 grid
2. Player X goes first, followed by Player O
3. Players take turns placing their markers
4. First player to get 3 markers in a row (horizontal, vertical, or diagonal) wins
5. If all 9 cells are filled with no winner, it's a draw

### Controls
- **Click a cell** - Place your marker (X or O)
- **Reset Game** - Clear the board and start fresh (keeps scores)
- **New Game** - Reset board and clear all scores
- **Mode Buttons** - Switch between Player vs Player and Player vs AI

### Game Modes

#### Player vs Player
- Two human players take turns
- Perfect for playing with friends

#### Player vs AI
- Play against the computer
- AI uses strategic thinking to challenge you
- Great for solo practice

## 🎨 Color Theme

The game features a modern, vibrant color scheme:

- **Primary Gradient**: Indigo → Purple → Pink (#6366f1 → #8b5cf6 → #ec4899)
- **Player X**: Blue-Purple gradient
- **Player O**: Pink-Rose gradient
- **Winning Cells**: Golden amber glow
- **Background**: Multi-color gradient backdrop

## 💻 Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript** - No frameworks or libraries required

### Key Functions

#### Game Logic
- `handleCellClick()` - Processes user clicks on game cells
- `checkWinner()` - Evaluates all winning combinations
- `checkDraw()` - Determines if game is a draw
- `makeMove()` - Places marker and updates UI
- `resetGame()` - Clears board for new round
- `updatePlayerDisplay()` - Updates turn indicator

#### AI Logic
- `makeAIMove()` - Main AI decision function
- `findBestMove()` - Identifies winning or blocking moves
- Strategic positioning (center → corners → edges)

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The game automatically adapts to different screen sizes:

- **Desktop** - Full-sized board with optimal spacing
- **Tablet** - Medium layout with touch-friendly cells
- **Mobile** - Compact design optimized for small screens

### Mobile Features
- Touch-optimized cell sizes
- Vibration feedback (on supported devices)
- Vertical layout adjustments
- Responsive font scaling

## 🎯 Features Breakdown

### Animations
- **Fade In** - Markers appear with smooth fade and scale effect
- **Pulse** - Winning cells pulse with golden glow
- **Hover** - Interactive hover states on buttons and cells
- **Modal** - Winner announcement slides up smoothly

### Score Tracking
- Persistent across rounds
- Tracks Player X wins
- Tracks Player O wins
- Counts draw games
- Can be reset with "New Game" button

## 🔧 Customization

### Changing Colors
Edit `style.css` and modify the gradient values:
```css
/* Background gradient */
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);

/* Player X color */
background: linear-gradient(135deg, #6366f1, #8b5cf6);

/* Player O color */
background: linear-gradient(135deg, #ec4899, #f43f5e);
```

### Adjusting AI Difficulty
In `script.js`, modify the AI logic:
- Comment out `findBestMove()` for easier AI
- Add more strategic rules for harder difficulty

## 🐛 Known Issues
None currently! The game is stable and fully functional.

## 🚀 Future Enhancements
Possible features for future versions:
- Online multiplayer
- Different board sizes (4x4, 5x5)
- Difficulty levels for AI
- Sound effects
- Game history/replay
- Themes and customization options

## 📄 License
This project is open source and available for personal and educational use.

## 👨‍💻 Author
Created with ❤️ using HTML, CSS, and JavaScript

## 🙏 Acknowledgments
- Inspired by the classic Tic Tac Toe game
- Modern design inspired by contemporary web trends
- Built for learning and fun!

---

**Enjoy the game! 🎮✨**

If you encounter any issues or have suggestions, feel free to enhance the code and make it your own!
