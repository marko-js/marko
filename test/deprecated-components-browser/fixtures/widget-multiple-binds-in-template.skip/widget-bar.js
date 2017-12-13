function Widget(config) {
    this.name = 'app-nested-widget-bind/bar';
    window.addWidget('app-nested-widget-bind/bar', this);
}

Widget.prototype = {};

exports.Widget = Widget;