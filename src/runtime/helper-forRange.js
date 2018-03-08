module.exports = function forRangeHelper(from, to, step, callback) {
    var i;

    step = step == null ? 1 : Math.abs(step);

    if (from < to) {
        for (i = from; i <= to; i += step) {
            callback(i);
        }
    } else {
        for (i = from; i >= to; i -= step) {
            callback(i);
        }
    }
};
