exports.verify = function (context, expect) {
    var rootNode = context.rootNode;
    expect(rootNode.disabled).to.equal(false);
};