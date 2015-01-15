function Widget(config) {
    debugger;
    var $el = this.$();

    this.appendHtml = function(html) {
        $el.append(html);
    };
}

module.exports = Widget;