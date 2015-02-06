function Widget(config) {
    this.label = config.label;
    this.name = 'app-bar';
    window.testData.addWidget('app-bar', this);

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