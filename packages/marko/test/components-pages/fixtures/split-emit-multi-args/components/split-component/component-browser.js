module.exports = {
    onMount: function() {
        window.splitComponent = this;
        this.clicked = false;
    },
    handleClick: function(value) {
        this.clicked = value;
    }
};
