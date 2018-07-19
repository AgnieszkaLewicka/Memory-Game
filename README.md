# Memory-Game

## Table of Contents

* [Project Purpose](#project purpose)
* [How to Load the game](#how to load the game)
* [Special Features](#special features)
* [Dependencies](#dependencies)
* [Resources](#resources)


## Project Purpose:

This game is a Udacity Course project. The  project HTML and CSS styling and JavaScript file (with imported JQuery library) to display dynamic version of the **Memory Game**.


## How to Load the game

- Download the file Memory_game.zip
- Open index.html file and play

## How to Play the Game

The game board consists of sixteen (eight pairs of different symbols) cards arranged in a grid randomly. 

At start player chooses first pair of cards and flips them on cklick (just 2 at the time).

On each turn:

- The player flips one card over to check the symbol
- The player then flips the second card, trying to find the same symbol
- If the cards match, both cards stay flipped over and change color to green
- If the cards do not match, both cards are flipping back to the hidden state
- The game ends once all cards have been correctly matched.

## Special Features


- Timer -  tracking of how long it took user to find 8 pairs and reports time on win pop-up
- Stars rating - game tracks amount of user's moves, which display rating of user's effectiveness. 0-15 Moves (3 stars) 15-20 (2 stars) more than 20 (just 1 star). 
- Winner Popup -  a pop-up appears after finding 8 pairs displaying the time, final star rating, amount of moves and button "Play again"
- Refresh button - user can reload game 

## Dependencies

The app is built with the following code dependencies:

1.Fontawesome v5.0.6
2.JQuery Library

## Resources

### Array shuffle:

- <http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array>

### Card Flipping CSS:

- <https://davidwalsh.name/css-flip>
- <http://callmenick.com/post/css-transitions-transforms-animations-flipping-card>

### Timer

- <https://www.w3schools.com/jsref/met_win_settimeout.asp>

### Modal

- <https://www.w3schools.com/howto/howto_css_modals.asp>

