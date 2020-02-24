exports.verify = function(context, expect) {
    var rootNode = context.rootNode;
    var button = rootNode.querySelector("button");
    expect(button.disabled).to.equal(true);
};
