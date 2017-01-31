module.exports = {
    emitPressEvent: function() {
        this.emit('press', { widget: this });
    }
};