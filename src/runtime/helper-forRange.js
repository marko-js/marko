var complain = "MARKO_DEBUG" && require("complain");

module.exports = function forRangeHelper(from, to, step, callback) {
    var i;

    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
        var isNegative = step < 0;
        var isNull = step == null;
    }

    step = step == null ? 1 : Math.abs(step);

    if (from <= to) {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
            if (isNegative && from < to) {
                complain(
                    '<for> "from" is less than "to" but you supplied a negative step value. This will no longer be supported in future versions of Marko.'
                );
            }
        }

        for (i = from; i <= to; i += step) {
            callback(i);
        }
    } else {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
            if (isNull) {
                complain(
                    '<for> "step" is now required when moving backwards. This will no longer be supported in future versions of Marko.'
                );
            } else if (!isNegative) {
                complain(
                    '<for> "from" is greater than "to" but you supplied a positive step value. This will no longer be supported in future versions of Marko.'
                );
            }
        }

        for (i = from; i >= to; i -= step) {
            callback(i);
        }
    }
};
