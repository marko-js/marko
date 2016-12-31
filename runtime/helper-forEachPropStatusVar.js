'use strict';

function LoopStatus(getLength, isLast, isFirst, getIndex) {
    this.getLength = getLength;
    this.isLast = isLast;
    this.isFirst = isFirst;
    this.getIndex = getIndex;
}

module.exports = function forEachPropStatusVarHelper(object, callback) {
    var keys = Object.keys(object);

    var i = 0;
    var len = keys.length;
    var loopStatus = new LoopStatus(
            function getLength() {
                return len;
            },
            function isLast() {
                return i === len - 1;
            },
            function isFirst() {
                return i === 0;
            },
            function getIndex() {
                return i;
            });

    for (; i < len; i++) {
        var key = keys[i];
        var value = object[key];
        callback(key, value, loopStatus);
    }
};