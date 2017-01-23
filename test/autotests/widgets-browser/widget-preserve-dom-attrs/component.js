module.exports = {
    onInput: function() {
        this.state =  {
            name: 'Joe'
        };
    },

    getTemplateData: function(state) {
        return state;
    }
};