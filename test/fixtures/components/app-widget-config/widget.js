function Widget(config) {
    this.name = 'app-widget-config';
    window.testData.addWidget('app-widget-config', this);
    this.config = config;
}

Widget.prototype = {
};

exports.Widget = Widget;