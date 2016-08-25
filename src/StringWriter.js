function StringWriter(events) {
    this.str = '';
    this.events = events;
    this.finished = false;
}

StringWriter.prototype = {
    end: function() {
        this.finished = true;
        if (this.events) {
            this.events.emit('finish');
        }
    },

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