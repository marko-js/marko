module.exports = {
    trim: function (str, info) {
        return str ? str.trim() : str;
    },
    upperCase: function (str, info) {
        return str ? str.toUpperCase(str) : str;
    }
};