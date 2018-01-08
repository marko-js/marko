module.exports = {
    onMount: function () {
        window.rerenderInitOrder.push('parent');
    },
    onUpdate: function () {
        window.rerenderInitOrder.push('parent');
    }
};