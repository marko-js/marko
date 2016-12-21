module.exports = require('marko/widgets/legacy').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function(input) {
        return {
            name: input.name
        };
    },
    getTemplateData: function(state, input) {
        return state;
    },
    setName: function(newName) {
        this.setState('name', newName);
    }
});