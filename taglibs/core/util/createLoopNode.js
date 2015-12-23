var parseFor = require('./parseFor');

function createLoopNode(str, body, builder) {
    var forDef = parseFor(str);

    if (forDef.error) {
        return forDef;
    }

    forDef.body = body;

    if (forDef.loopType === 'ForEach') {
        return builder.forEach(forDef);
    } else if (forDef.loopType === 'ForRange') {
        return builder.forRange(forDef);
    } else if (forDef.loopType === 'For') {
        return builder.forStatement(forDef);
    } else {
        throw new Error('Unsupported loop type: ' + forDef.loopType);
    }
}

module.exports = createLoopNode;
