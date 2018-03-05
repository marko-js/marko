function Widget(config) {
    this.name = 'app-nested-widget-bind/foo';
    window.addWidget('app-nested-widget-bind/foo', this);
}

Widget.prototype = {};

exports.Widget = Widget;