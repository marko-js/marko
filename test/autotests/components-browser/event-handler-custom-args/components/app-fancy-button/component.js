module.exports = {
    getTemplateData: function(state, input) {
        return {
            label: input.label
        };
    },

    emitPressEvent: function() {
        this.emit('press', { widget: this });
    }
};