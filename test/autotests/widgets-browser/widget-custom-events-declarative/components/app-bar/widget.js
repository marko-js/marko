function Widget(config) {
    this.label = config.label;
    this.name = 'app-bar';

    var el = this.el;

    this.appendHtml = function(html) {
        el.innerHTML += html;
    };
}

Widget.prototype = {
    emitTestEvent: function() {
        this.emit('testEvent', 'a', 'b');
    }
};

exports.Widget = Widget;