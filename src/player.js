'use strict'

var inquirer = require('inquirer');

var game = require('../example/example.game');

/**

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem in the
workshop text. But we hope you try it yourself first. :-)

**/

function play(node) {

    // Base case
    if (!node.connections.length) {
        console.log(node.text);
        return Promise.resolve({ node: node }); // Don't worry about this, we will look more into Promise later on
    }

    // Recursive case
    return inquirer.prompt([{
        name: 'node',
        message: node.text,
        type: 'list',
        choices: node.connections,
    }]).then(function(answer) {
        return play(answer.node);
    });
}

play(game.startingPoint)
    .then(function(last) {
        console.log('Game over.'); // This will run after the Promise.resolve() method is called
    });
