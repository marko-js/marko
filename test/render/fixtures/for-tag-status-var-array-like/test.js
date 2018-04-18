exports.templateData = {
    // this complex a pollyfill is not required, since forEachStatusVariableHelper only checks for the presence of .forEach, however it is included for completeness sake
    arrayLike: {
        0: "red",
        1: "green",
        2: "blue",
        length: 3,
        forEach: function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        }
    }
};
