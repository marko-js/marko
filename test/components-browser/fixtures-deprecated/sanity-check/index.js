module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),
    getInitialState: function (input) {
        return {
            name: input.name
        };
    },
    getTemplateData: function (state, input) {
        return state;
    },
    setName: function (newName) {
        this.setState('name', newName);
    }
});