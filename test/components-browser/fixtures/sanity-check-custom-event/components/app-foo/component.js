module.exports = {
    emitTestEvent: function () {
        this.emit('test', 'abc', '123');
    }
};