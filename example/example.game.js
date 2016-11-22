// this file defines an actual game that will be played

var Game = require('../src/game');

var game = new Game();

// adding nodes

game.addNode('direction', 'Welcome. Do you choose to go left, or right?');

game.addNode('leftResp', 'Ah, good choice. Good choice. Now what color is the best?');
game.addNode('rightResp', 'There be dragons there.');

game.addNode('yep', 'That is true');
game.addNode('wrong', 'You would be incorrect, friend. Try again?');
game.addNode('bad', 'WHAT!? I hate purple! Goodbye.');

// connecting nodes

game.connect('direction', 'leftResp', 'left');
game.connect('direction', 'rightResp', 'right');

game.connect('leftResp', 'yep', 'blue');
game.connect('leftResp', 'wrong', 'green');
game.connect('leftResp', 'wrong', 'red');
game.connect('leftResp', 'bad', 'purple');

game.connect('wrong', 'leftResp', 'sure...');

module.exports = game;
