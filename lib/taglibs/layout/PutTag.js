define(
    'raptor/templating/taglibs/layout/PutTag', 
    function(require) {
        return {
            render: function(input, context) {
                input._layout.handlePutTag(input);
            }
        };
    });