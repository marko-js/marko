function Widget() {}

Widget.prototype = {
    renderer: require("./renderer")
};

exports.Widget = Widget;
