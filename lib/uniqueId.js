module.exports = function (context) {
    var attrs = context.attributes;
    if (!attrs._nextId) {
        attrs._nextId = 0;
    }
    return attrs._nextId++;
};