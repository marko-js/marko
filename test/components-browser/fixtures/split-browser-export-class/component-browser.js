function Component() {}

Component.prototype = {
    handleClick: function (input) {
        this.state.clicked = true;
    }
};

module.exports = Component;