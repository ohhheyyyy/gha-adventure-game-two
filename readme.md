# Build Your Own Adventure

Today we’re going to build an object-oriented *engine* to support “choose your own adventure” games — also known as "text adventures" or "interactive fiction." For example, a player might face a choice, enter a decision, and see the result:

```sh
Welcome. Do you choose to go left, or right?
1) left
2) right
1

Ah, good choice. Good choice.
```

(Had the adventurer chosen option 2, the game would have said “There be dragons there” and ended.)

Immediately we see that the game needs to support *branching* — responding in different ways depending on user input. Systems like the one we’re building are often called *State Machines*. Some of you may have studied these in school. Whether the concept is new or familiar, you may want to take a couple minutes to watch [this video](https://www.youtube.com/watch?v=-Yicg2TTMPs).

## Setup

1. Clone this repo to your computer
1. Run `npm install` from within the cloned repo folder
1. Open the cloned folder in your text editor

## Orientation

* `test` contains spec files to guide you in completing the workshop.
* `src` contains source code files you must write to implement the game engine.
* `example` contains an example game demonstrating how the engine is used. You should read this but not change it.

## Instructions

### Examining the System

Begin by checking out `example/example.game.js`. See if you can piece together what is going on. Diagram out the game graph (which decisions lead to which game states) and note the main objects and methods being used.

### Following the Specs

Refer to the test specs in the `test` folder, as well as our description of the game components at the bottom of this README. Run `npm test` to execute the test suite and check your progress. We recommend you tackle the exercises in the following order:

* Pass `test/node.test.js` and `test/connection.test.js` first.
* Try `test/game.test.js` after solving the other two specs. Change `xdescribe` to `describe` to activate this spec.

### Completing the Engine

Once you pass all the specs, the `Game` class is properly built, but it has not yet been "plugged in" to work with a command line interface (CLI). There is one more file to complete: `src/player.js`.

The job of this file is to pull in `example/example.game.js` and tie it together with the [`inquirer`](https://github.com/sboudrias/Inquirer.js) library, launching an actual game which a user can interact with in the command line. There are no specs for this final part; you will know everything is working when `npm start` launches the command-line choose-your-own-adventure example game.

## Components

We’re going to build this engine with several suggested components. We’ve set up files for each one in this project. We also wired them up to talk to each other.

- *Node*: A node is a single question or prompt in a game. Not to be confused with the technology _Node.js_ which we are also studying at Fullstack. This is particularly confusing because we have a file called `node.js` in this project, and because this project is _built_ in Node.
- *Connection*: Connections represent the circumstances under which our game changes from one state to another. For the question “Would you like a cookie?” the connections might have the conditions “yes” and “no.”
- *Game*: The game is what holds everything together. It's the interface that a game programer would use to construct these games. It exposes methods like `addNode` and `connect`. It keeps track of all the nodes in a JavaScript object.
- *Player*: This is a component that is basically the “user interface”. It works with an npm package to present the current question to the user.
- *Example Game*: uses the `Game` class to build a game instance. You don't need to change this.
