module.exports = function (elNode, codegen) {
    var builder = codegen.builder;

    var helloNode1 = codegen.context.createNodeForEl('test-hello', [{
        name: 'name',
        value: builder.literal('Frank')
    }]);

    var helloNode2 = codegen.context.createNodeForEl('test-hello', {
        name: builder.literal('Frank')
    });

    var helloNode3 = codegen.context.createNodeForEl('test-hello', {
        name: {
            value: builder.literal('Frank')
        }
    });

    return [helloNode1, helloNode2, helloNode3];
};