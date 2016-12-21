module.exports = {
    onInput:function(input){
        this.state = {
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
};