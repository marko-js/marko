function Component() {}

Component.prototype = {
    handleClick: function () {
        this.state.clicked = true;
    }
};

module.exports = Component;