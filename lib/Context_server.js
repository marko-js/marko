module.exports = {
    uniqueId: function () {
        var attrs = this.attributes;
        if (!attrs._nextId) {
            attrs._nextId = 0;
        }
        return attrs._nextId++;
    }
};