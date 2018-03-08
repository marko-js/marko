function LoopStatus(len) {
    this.i = 0;
    this.len = len;
}

LoopStatus.prototype = {
    getLength: function() {
        return this.len;
    },
    isLast: function() {
        return this.i === this.len - 1;
    },
    isFirst: function() {
        return this.i === 0;
    },
    getIndex: function() {
        return this.i;
    }
};

/**
 * Internal helper method to handle loops with a status variable
 * @private
 */
module.exports = function forEachStatusVariableHelper(array, callback) {
    if (!array) {
        return;
    }
    if (!array.forEach) {
        array = [array];
    }

    var len = array.length;
    var loopStatus = new LoopStatus(len);

    for (; loopStatus.i < len; loopStatus.i++) {
        var o = array[loopStatus.i];
        callback(o, loopStatus);
    }
};
