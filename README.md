# Newsroom Lockdown

An interactive browser-based escape-room game set inside a digital newsroom. Explore the newsroom, investigate objects, solve randomized puzzles, collect rewards, and escape before the countdown reaches zero.

Newsroom Lockdown combines an HTML interface, CSS styling, JavaScript game logic, puzzle management, inventory tracking, scoring, and audio feedback into an interactive gaming experience.

## What It Does

Newsroom Lockdown challenges players to solve puzzles and escape from a locked digital newsroom.

Players can:

- Explore different locations inside the newsroom.
- Investigate the desk, files, computer, server, and exit.
- Solve randomly selected puzzles.
- Collect rewards and track their inventory.
- Monitor their score and remaining time.
- Complete all five puzzles to escape the newsroom.

## Core Features

### Interactive Newsroom

- Browser-based newsroom environment
- Interactive objects for exploring the game area
- Dedicated locations for the desk, files, computer, server, and exit
- Object interactions connected to the puzzle system

### Puzzle System

- Five puzzle categories linked to newsroom objects
- Randomly selected questions from predefined puzzle sets
- Text-based answer submission
- Case-insensitive answer validation
- Completion tracking to prevent replaying solved puzzles

### Timer and Game Progress

- 10-minute countdown timer
- Time-expiration handling
- Game progress tracking
- Completion condition based on solving all five puzzles

### Scoring System

- Starting score of 1,000 points
- Earn 100 points for each correct answer
- Lose 25 points for an incorrect answer
- Score cannot fall below zero
- Final score displayed when the game is completed

### Inventory Management

- Collect rewards by solving puzzles
- Display collected items in the inventory panel
- Clear inventory when starting a new game
- Track rewards associated with different puzzle locations

### Audio Feedback

- Background music during gameplay
- Click sounds for interactions
- Success sounds for correct answers
- Alarm sounds for incorrect answers and time expiration

### Game Completion

- Detect when all five puzzles are solved
- Stop the countdown timer
- Display the final score
- Show the completed puzzle count
- Present the end screen when the player escapes

### User Interface

- Dedicated start screen
- Interactive game screen
- Puzzle modal for answering questions
- Score, timer, message, and inventory panels
- Image-based icons for newsroom objects

## Technology Stack

| Area | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Game Logic | JavaScript |
| Modules | JavaScript ES Modules |
| Interactions | DOM API and Event Listeners |
| Audio | HTML5 Audio / JavaScript audio controls |
| Development | Visual Studio Code |
| Local Testing | VS Code Live Server |
| Version Control | Git and GitHub |

## Architecture

```text
HTML Interface
      ↓
CSS Styling and Layout
      ↓
JavaScript Main Controller
      ↓
Game Logic
      ├── Puzzle System
      ├── Timer System
      ├── Inventory System
      └── Audio System
      ↓
Score Tracking and Game Completion
```

## Local Setup

### Prerequisites

- A modern web browser
- Visual Studio Code
- The Live Server extension for VS Code

### Installation

Clone the repository:

```bash
git clone priyakamal-BloomNote/newsroom-lockdown
```

Navigate to the project directory:

```bash
cd newsroom-lockdown
```

Open the project in Visual Studio Code:

```bash
code .
```

Run the game using Live Server:

1. Open `index.html`.
2. Right-click inside the editor.
3. Select **Open with Live Server**.
4. Open the local URL provided by Live Server.
5. Click **Start Game** to begin.

A local development server is recommended because the game uses JavaScript ES modules.

## Project Structure

```text
newsroom-lockdown/
├── index.html
├── css/
│   ├── style.css
│   ├── menu.css
│   └── game.css
├── js/
│   ├── main.js
│   ├── game.js
│   ├── puzzles.js
│   ├── timer.js
│   ├── inventory.js
│   └── audio.js
├── icons/
│   ├── key.png
│   ├── server.png
│   └── exit.png
└── media/
    ├── images/
    └── audio/
```

*The structure above is illustrative. Update it to match the actual files and asset locations in your repository.*

## Game Rules

| Event | Outcome |
|---|---|
| Start a new game | Score resets to 1,000 |
| Solve a puzzle | Gain 100 points and collect a reward |
| Submit an incorrect answer | Lose 25 points |
| Solve all five puzzles | Complete the game |
| Timer reaches zero | Trigger the time-expiration state |

## Future Improvements

- Multiple difficulty levels
- More challenging investigative puzzles
- Additional newsroom locations
- Hints and clue-discovery mechanics
- Persistent leaderboards and high scores
- Improved mobile and tablet support
- Additional levels and story-based endings
- More detailed victory and game-over screens

## Security and Compatibility

- Runs locally in a modern web browser.
- Uses JavaScript modules to organize game functionality.
- Requires correct relative paths for images, audio, stylesheets, and scripts.
- Does not require a backend server or database for its current gameplay design.

## Portfolio Note

Newsroom Lockdown is an experimental game-development project demonstrating interactive web development, modular JavaScript, event handling, puzzle validation, state management, scoring mechanics, timer control, inventory tracking, and browser-based audio integration.

The project explores how a familiar newsroom environment can be transformed into an interactive escape-room experience through code, puzzles, and storytelling.

---

**Find the truth. Unlock the newsroom. Escape.** 🔐
