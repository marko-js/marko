exports.templateData = {
    reverseIterator: function (arrayList, callback) {
        var statusVar = { first: 0, last: arrayList.length - 1 };
        for (var i = arrayList.length - 1; i >= 0; i--) {
            statusVar.index = i;
            callback(arrayList[i], statusVar);
        }
    }
};