var REPEATED_ID_KEY = '$rep';

function RepeatedId() {
    this.$__nextIdLookup = {};
}

RepeatedId.prototype = {
    $__nextId: function(parentId, id) {
        var indexLookupKey = parentId + '-' + id;
        var currentIndex = this.$__nextIdLookup[indexLookupKey];
        if (currentIndex == null) {
            currentIndex = this.$__nextIdLookup[indexLookupKey] = 0;
        } else {
            currentIndex = ++this.$__nextIdLookup[indexLookupKey];
        }

        return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
    }
};

exports.$__nextId = function(out, parentId, id) {
    var repeatedId = out.global[REPEATED_ID_KEY];
    if (repeatedId == null) {
        repeatedId = out.global[REPEATED_ID_KEY] = new RepeatedId();
    }

    return repeatedId.$__nextId(parentId, id);
};
