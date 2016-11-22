module.exports = require('marko/widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState:function(input){
        return  {
            name: input.name,
            count: input.count,
            className: input['class']
        };
    },

    getTemplateData:function(state, input){
         return  {
            name: state.name,
            count: state.count,
            foo: 'bar',
            hello: 'world',
            className: state.className
        };
    }
});