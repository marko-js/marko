function Component() {
    throw new Error('THIS SHOULD NOT BE CALLED');
}

Component.prototype = {
    onCreate: function () {
        this.state = {
            name: 'Frank'
        };
    }
};

module.exports = Component;