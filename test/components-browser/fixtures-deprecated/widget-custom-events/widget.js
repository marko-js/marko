function Widget(config) {
    this.name = 'app-foo';
    this.config = config;
    this.getWidget('bar').appendHtml('FOO');
}

Widget.prototype = {};

exports.Widget = Widget;