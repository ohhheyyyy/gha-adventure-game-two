var Node = require('./node');

var Game = function() {
    this.nodes = {};
    this.startingPoint = null;
    this.addNode = function(title, text) {
        if (!this.nodes.hasOwnProperty(title)) {
            this.nodes[title] = new Node(title, text);
            if (Object.keys(this.nodes).length === 1) {
                this.startingPoint = this.nodes[title];
            }
        } else {
            throw new Error("Error!");
        }
        return this.nodes[title];
    };
    this.getNode = function(title) {
        return this.nodes[title];
    };
    this.connect = function(title1, title2, condition) {
        this.nodes[title1].connect(this.nodes[title2], condition);
    };
};

module.exports = Game;
