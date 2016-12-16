function Widget(config) {
    this.label = config.label;
    this.name = 'app-bar';

    var el = this.el;

    this.appendHtml = function(html) {
        el.innerHTML += html;
    };
}

Widget.prototype = {
};

exports.Widget = Widget;