var pubsub = require('~/util/pubsub');

function Widget(config) {
    this.name = config.name;
    var self = this;

    if (config.channel) {
        pubsub.channel(config.channel).on('emitTestEvent2', function() {
            self.emitTestEvent2();
        });
    }
}

Widget.prototype = {
    emitTestEvent1: function() {
        this.emit('testEvent', 'a', 'b');
    },

    emitTestEvent2: function() {
        this.emit('testEvent');
    }
};

exports.Widget = Widget;