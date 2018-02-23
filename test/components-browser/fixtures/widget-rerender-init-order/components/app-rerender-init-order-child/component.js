module.exports = {
    onMount: function () {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder = window.rerenderInitOrder || [];
        window.rerenderInitOrder.push(this.input.id);
    },
    onUpdate: function () {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.input.id);
    }
};