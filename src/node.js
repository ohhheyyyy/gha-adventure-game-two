var Connection = require('./connection');

var Node = function(title, text) {
  this.title = title;
  this.text = text;
  this.connections = [];
  this.conditions = {};
  this.connect = function(destination, command) {
    this.connections.push(new Connection(destination, command));
    if (!this.conditions.hasOwnProperty(command)) {
      this.conditions[command] = new Connection(destination, command);
    } else {
      throw new Error('Duplicate connections not allowed.');
    }
  };
};

module.exports = Node;
