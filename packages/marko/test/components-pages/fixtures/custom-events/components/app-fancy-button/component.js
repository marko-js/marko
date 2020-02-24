module.exports = {
    emitPressEvent: function() {
        this.emit("press", { component: this });
    }
};
