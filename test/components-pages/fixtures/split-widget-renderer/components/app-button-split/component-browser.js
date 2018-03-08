module.exports = {
    onMount: function() {
        window.appButtonSplit = this;
    },
    setColor: function(color) {
        this.el.style.backgroundColor = color;
    },
    setLabel: function(label) {
        this.el.innerHTML = label;
    }
};
