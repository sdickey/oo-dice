window.addEventListener('load', initialize)

function initialize() {
    var view = new View()
    controller = new Controller(view)
    controller.bindListeners()
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
    renderButton: function() {},

    renderDice: function() {},

    renderNumber: function() {}
}

function Controller(view) {
    this.view = view
    this.dice = []
}

Controller.prototype = {
    bindListeners: function() {
        console.log(" go fuck yourself")
        $('.btn-create').on('click', this.createAndStoreDie.bind(this))
    },

    createDie: function() {
        var die = new Die()
        die.initialize()
        return die
    },

    storeDie: function(die) {
        this.dice.push(die)
    },

    createAndStoreDie: function() {
        var die = this.createDie()
        this.storeDie(die)
    }
}
