module.exports = {
    emitTestEvent1: function() {
        this.emit("testEvent", "a", "b");
    },

    emitTestEvent2: function() {
        this.emit("testEvent");
    }
};
