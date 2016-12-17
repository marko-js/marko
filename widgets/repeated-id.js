var REPEATED_ID_KEY = '$rep';

function RepeatedId() {
    this.nextIdLookup = {};
}

RepeatedId.prototype = {
    nextId: function(parentId, id) {
        var indexLookupKey = parentId + '-' + id;
        var currentIndex = this.nextIdLookup[indexLookupKey];
        if (currentIndex == null) {
            currentIndex = this.nextIdLookup[indexLookupKey] = 0;
        } else {
            currentIndex = ++this.nextIdLookup[indexLookupKey];
        }

        return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
    }
};

exports.$__nextId = function(out, parentId, id) {
    var repeatedId = out.global[REPEATED_ID_KEY];
    if (repeatedId == null) {
        repeatedId = out.global[REPEATED_ID_KEY] = new RepeatedId();
    }

    return repeatedId.nextId(parentId, id);
};
