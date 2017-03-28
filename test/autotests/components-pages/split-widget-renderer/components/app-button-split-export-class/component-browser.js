function Component() {

}

Component.prototype = {
    onMount: function() {
        window.appButtonSplitExportClass = this;
    },
    setColor: function(color) {
        this.el.style.backgroundColor = color;
    },
    setLabel: function(label) {
        this.el.innerHTML = label;
    }
};

module.exports = Component;
