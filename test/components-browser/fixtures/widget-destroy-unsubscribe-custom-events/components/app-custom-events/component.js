module.exports = {
    onInput: function (input) {
        this.name = input.name;
        this.channel = input.channel;
    },

    onMount: function () {
        var self = this;

        if (this.channel) {
            pubsub.channel(this.channel).on('emitTestEvent2', function () {
                self.emitTestEvent2();
            });
        }
    },

    emitTestEvent1: function () {
        this.emit('testEvent', 'a', 'b');
    },

    emitTestEvent2: function () {
        this.emit('testEvent');
    }
};