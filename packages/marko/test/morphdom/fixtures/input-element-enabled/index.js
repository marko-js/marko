exports.verify = function(context, expect) {
    var rootNode = context.rootNode;
    var input = rootNode.querySelector("input");
    expect(input.disabled).to.equal(false);
};
