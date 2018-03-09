module.exports = function notEmpty(o) {
    if (o == null) {
        return false;
    } else if (Array.isArray(o)) {
        return !!o.length;
    } else if (o === "") {
        return false;
    }

    return true;
};
