![](https://img.shields.io/badge/Microverse-blueviolet)


# Javascript Capstone Project : Video game

## Built With

- HTML5
- CSS3
- Javascript (ES6)

## Live Demo

Visit [Tucu Space Shooter](https://jovial-aryabhata-576249.netlify.app/)

## Game Design Document

- The framework chosen for the game development is Phaser 3
- The game UI will contain 8 screens.
- We will have 2 screens for booting (main logo, preloading assets with a progress bar) up to the main title scene, where the user will get to the interactive menu.
 - This menu will have 4 options:
     - Play the game
     - Options for sound and music
     - Credits
     - Scoreboard with the top ten scores
- Scores are stored in an online server and accesed through an API
- Game Logic:
    - The game takes place in space, bounded by the screen size of the game, where all object rebound when colliding to the limits
     - The objective is to collect as many gold ans silver pills as possible
     - The difficulty resides in not crashing to the enemyes, who fly around all over the screen
     - When the player touches one of the enemies, the game is over
     - After the game is over, the player can store the score in the API for compiting agains all other players
     - User can achieve boost speed pressing down Shift + Up key. This doubles the speed.

## Screenshots

![screenshot 1](scr1.png)
![screenshot 2](scr2.png)
![screenshot 3](scr3.png)
![screenshot 4](scr4.png)
![screenshot 5](scr5.png)
![screenshot 6](scr6.png)

## Prerequisites

- [Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.
- Internet browser compatible with HTML5, CSS3 and Javascript ES6

## Getting Started

- Open your terminal - Windows: `Win + R`, then type `cmd` | Mac: `Command + space`, then type `Terminal`
- Navigate to a directory of your choosing using the `cd` command
- Run this command in your OS terminal: `git clone git@github.com:MiguelArgentina/js-capstone-project.git` to get a copy of the project.
- Navigate to the project's directory using the `cd` command


## Using the game

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).


## Author

👤 &nbsp; **Miguel Ricardo Gomez**

- GitHub: [@MiguelArgentina](https://github.com/MiguelArgentina)
- Twitter: [@Qete_arg](https://twitter.com/Qete_arg)
- LinkedIn: [Miguel Ricardo Gomez](https://www.linkedin.com/in/miguelricardogomez/)

<br>
<br>
<p align="center">
  <a href="https://github.com/MiguelArgentina/js-capstone-project/issues">
  <img src="https://img.shields.io/github/issues-raw/MiguelArgentina/js-capstone-project?style=for-the-badge"
       alt="Issues"></a>
   <a href="https://github.com/MiguelArgentina/js-capstone-project/pulls">
  <img src="https://img.shields.io/github/issues-pr/MiguelArgentina/js-capstone-project?style=for-the-badge"
       alt="Pull Requests"></a>
   <a href="https://github.com/MiguelArgentina/js-capstone-project/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/MiguelArgentina/js-capstone-project?style=for-the-badge"
       alt="License"></a>
</p>

## Show your support

Give a &nbsp;⭐️ &nbsp; if you like this project!

## Acknowledgments

- Phaser Tutorials for the [Game Template](https://phasertutorials.com/creating-a-phaser-3-template-part-1/)

- Credit "Kenney.nl" or "www.kenney.nl" for the [assets](https://opengameart.org/content/space-shooter-redux)

- York Computer Solutions LLC for the [shooter tutorial](https://learn.yorkcs.com/build-a-space-shooter-with-phaser-3/) 