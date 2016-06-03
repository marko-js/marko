function Widget(config) {
    this.name = 'app-nested-widget-bind/foo';
    window.testData.addWidget('app-nested-widget-bind/foo', this);
}

Widget.prototype = {
    test: function() {
    }
};

exports.Widget = Widget;