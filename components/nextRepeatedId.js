var REPEATED_ID_KEY = '$rep';

module.exports = function nextRepeatedId(out, parentId, id) {
    var nextIdLookup = out.global[REPEATED_ID_KEY] || (out.global[REPEATED_ID_KEY] = {});

    var indexLookupKey = parentId + '-' + id;
    var currentIndex = nextIdLookup[indexLookupKey];
    if (currentIndex == null) {
        currentIndex = nextIdLookup[indexLookupKey] = 0;
    } else {
        currentIndex = ++nextIdLookup[indexLookupKey];
    }

    return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
};
