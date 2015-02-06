function Widget(config) {
    var $el = this.$();

    this.appendHtml = function(html) {
        $el.append(html);
    };
}

Widget.prototype = {
    emitTestEvent: function() {
        this.emit('testEvent', 'a', 'b');
    }
};

module.exports = Widget;