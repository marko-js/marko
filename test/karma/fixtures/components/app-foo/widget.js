function Widget(config) {
    this.config = config;
    this.widgets.bar.appendHtml('FOO');
    window.appFoo = this;
}

module.exports = Widget;