/**
 * Merges object properties
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function merge(into, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k) && !into.hasOwnProperty(k)) {
            into[k] = source[k];
        }
    }
    return into;
}

module.exports = merge;