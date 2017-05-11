module.exports = function forRangeHelper(from, to, step, callback) {
    if (step == null) {
        step = from <= to ? 1 : -1;
    }

    var i;

    if (step > 0) {
        for (i=from; i<=to; i += step) {
            callback(i);
        }
    } else {
        for (i=from; i>=to; i += step) {
            callback(i);
        }
    }

};