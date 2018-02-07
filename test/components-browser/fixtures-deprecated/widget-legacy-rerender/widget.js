function Widget(config) {}

Widget.prototype = {
    renderer: require('./renderer')
};

exports.Widget = Widget;