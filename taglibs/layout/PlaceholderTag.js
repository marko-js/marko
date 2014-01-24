module.exports = {
    render: function (input, context) {
        var content = input.content[input.name];
        if (content) {
            if (content.value) {
                context.write(content.value);
            } else if (content.invokeBody) {
                content.invokeBody();
            }
        } else {
            if (input.invokeBody) {
                input.invokeBody();
            }
        }
    }
};