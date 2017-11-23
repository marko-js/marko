
module.exports = {
    onInput: function (input) {
        this.state = {
            className: input.className
        };
    },

    getTemplateData: function (state) {
        return state;
    }
};