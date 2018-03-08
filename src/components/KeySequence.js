function KeySequence() {
    this.___lookup = {};
}

KeySequence.prototype = {
    ___nextKey: function(key) {
        // var len = key.length;
        // var lastChar = key[len-1];
        // if (lastChar === ']') {
        //     key = key.substring(0, len-2);
        // }
        var lookup = this.___lookup;

        var currentIndex = lookup[key]++;
        if (!currentIndex) {
            lookup[key] = 1;
            currentIndex = 0;
            return key;
        } else {
            return key + "_" + currentIndex;
        }
    }
};

module.exports = KeySequence;
