// Game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let gameMode = 'pvp'; // 'pvp' or 'pva' (Player vs Player or Player vs AI)
let scores = {
    X: 0,
    O: 0,
    draw: 0
};

// Winning combinations
const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// DOM elements
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const resetBtn = document.getElementById('resetBtn');
const newGameBtn = document.getElementById('newGameBtn');
const pvpBtn = document.getElementById('pvpBtn');
const pvaBtn = document.getElementById('pvaBtn');
const winnerModal = document.getElementById('winnerModal');
const winnerText = document.getElementById('winnerText');
const playAgainBtn = document.getElementById('playAgainBtn');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');
const scoreDrawDisplay = document.getElementById('scoreDraw');

// Initialize game
function initGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetBtn.addEventListener('click', resetGame);
    newGameBtn.addEventListener('click', newGame);
    pvpBtn.addEventListener('click', () => setGameMode('pvp'));
    pvaBtn.addEventListener('click', () => setGameMode('pva'));
    playAgainBtn.addEventListener('click', () => {
        closeModal();
        resetGame();
    });

    updateScoreDisplay();
}

// Handle cell click
function handleCellClick(e) {
    const cellIndex = e.target.getAttribute('data-index');

    // Check if cell is already taken or game is not active
    if (gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    // Make move
    makeMove(cellIndex, currentPlayer);

    // Check for winner or draw
    if (checkWinner()) {
        endGame(currentPlayer);
        return;
    }

    if (checkDraw()) {
        endGame('draw');
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updatePlayerDisplay();

    // AI move if in PvA mode and it's O's turn
    if (gameMode === 'pva' && currentPlayer === 'O' && gameActive) {
        setTimeout(makeAIMove, 500);
    }
}

// Make a move
function makeMove(index, player) {
    gameBoard[index] = player;
    const cell = cells[index];
    cell.textContent = player;
    cell.classList.add('taken');
    cell.classList.add(player.toLowerCase());
    
    // Add vibration feedback if supported
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Check for winner
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            // Highlight winning cells
            cells[a].classList.add('winning');
            cells[b].classList.add('winning');
            cells[c].classList.add('winning');
            return true;
        }
    }
    return false;
}

// Check for draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// End game
function endGame(result) {
    gameActive = false;
    
    if (result === 'draw') {
        scores.draw++;
        winnerText.textContent = "It's a Draw! 🤝";
    } else {
        scores[result]++;
        winnerText.textContent = `Player ${result} Wins! 🎉`;
    }
    
    updateScoreDisplay();
    showModal();
    
    // Strong vibration for game end
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}

// Update player display
function updatePlayerDisplay() {
    const playerName = gameMode === 'pva' && currentPlayer === 'O' ? 'AI' : `Player ${currentPlayer}`;
    currentPlayerDisplay.textContent = `${playerName}'s Turn`;
}

// Reset game (keep scores)
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o', 'winning');
    });
    
    updatePlayerDisplay();
}

// New game (reset scores)
function newGame() {
    resetGame();
    scores = { X: 0, O: 0, draw: 0 };
    updateScoreDisplay();
}

// Set game mode
function setGameMode(mode) {
    gameMode = mode;
    
    if (mode === 'pvp') {
        pvpBtn.classList.add('active');
        pvaBtn.classList.remove('active');
    } else {
        pvaBtn.classList.add('active');
        pvpBtn.classList.remove('active');
    }
    
    resetGame();
}

// Update score display
function updateScoreDisplay() {
    scoreXDisplay.textContent = scores.X;
    scoreODisplay.textContent = scores.O;
    scoreDrawDisplay.textContent = scores.draw;
}

// Show modal
function showModal() {
    winnerModal.classList.add('show');
}

// Close modal
function closeModal() {
    winnerModal.classList.remove('show');
}

// AI Move (with difficulty)
function makeAIMove() {
    if (!gameActive) return;

    // Try to win
    const winMove = findBestMove('O');
    if (winMove !== -1) {
        makeMove(winMove, 'O');
        if (checkWinner()) {
            endGame('O');
            return;
        }
        currentPlayer = 'X';
        updatePlayerDisplay();
        return;
    }

    // Block player from winning
    const blockMove = findBestMove('X');
    if (blockMove !== -1) {
        makeMove(blockMove, 'O');
        if (checkDraw()) {
            endGame('draw');
            return;
        }
        currentPlayer = 'X';
        updatePlayerDisplay();
        return;
    }

    // Take center if available
    if (gameBoard[4] === '') {
        makeMove(4, 'O');
        if (checkDraw()) {
            endGame('draw');
            return;
        }
        currentPlayer = 'X';
        updatePlayerDisplay();
        return;
    }

    // Take a corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(index => gameBoard[index] === '');
    if (availableCorners.length > 0) {
        const randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        makeMove(randomCorner, 'O');
        if (checkDraw()) {
            endGame('draw');
            return;
        }
        currentPlayer = 'X';
        updatePlayerDisplay();
        return;
    }

    // Take any available space
    const availableMoves = gameBoard.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    if (availableMoves.length > 0) {
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        makeMove(randomMove, 'O');
        if (checkDraw()) {
            endGame('draw');
            return;
        }
        currentPlayer = 'X';
        updatePlayerDisplay();
    }
}

// Find best move for a player (to win or block)
function findBestMove(player) {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        const cells = [gameBoard[a], gameBoard[b], gameBoard[c]];
        
        // Check if two cells have the player's marker and one is empty
        if (cells.filter(cell => cell === player).length === 2 && cells.includes('')) {
            if (gameBoard[a] === '') return a;
            if (gameBoard[b] === '') return b;
            if (gameBoard[c] === '') return c;
        }
    }
    return -1;
}

// Initialize the game when page loads
initGame();
