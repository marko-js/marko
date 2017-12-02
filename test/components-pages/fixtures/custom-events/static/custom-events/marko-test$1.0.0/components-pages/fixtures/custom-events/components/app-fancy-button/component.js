$_mod.def("/marko-test$1.0.0/components-pages/fixtures/custom-events/components/app-fancy-button/component", function(require, exports, module, __filename, __dirname) { module.exports = {
    emitPressEvent: function() {
        this.emit('press', { component: this });
    }
};
});