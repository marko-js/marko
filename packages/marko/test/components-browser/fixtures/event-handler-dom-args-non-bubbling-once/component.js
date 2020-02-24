module.exports = {
    onMount: function() {
        this.mouseMoveEventCalls = [];
    },

    handleButtonMouseMove: function() {
        this.mouseMoveEventCalls.push(arguments);
    }
};
