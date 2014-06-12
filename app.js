window.addEventListener('load', initialize)

function initialize() {
  var view = new View()
  controller = new Controller()
}

function Die() {}

Die.prototype = {
  generateNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  initialize: function(min, max) {
    this.number = this.generateNumber(1, 6)
  }
}

function View() {}

View.prototype = {
  renderButton: function() {
  },

  renderDice: function() {
  },

  renderNumber: function() {
  }
}

function Controller() {}

Controller.prototype = {
  bindListeners: function() {
  }
}