'use strict';
require('raptor-util').extend(require('./Context'), {
    uniqueId: function () {
        var attrs = this.attributes;
        if (!attrs._nextId) {
            attrs._nextId = 0;
        }
        return attrs._nextId++;
    }
});