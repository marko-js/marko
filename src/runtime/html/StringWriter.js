"use strict";

function StringWriter() {
    this.str = "";
}

StringWriter.prototype = {
    write: function(str) {
        this.str += str;
        return this;
    },

    /**
     * Converts the string buffer into a String.
     *
     * @returns {String} The built String
     */
    toString: function() {
        return this.str;
    }
};

module.exports = StringWriter;
