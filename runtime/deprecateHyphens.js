var copyProp;

var maxWarn = 20;
var currentWarn = 0;

var logger = typeof console !== 'undefined' && console.warn && console;

function deprecateWarning(deprecatedName) {
    logger.warn('Deprecated: Use the unhyphenated name instead for reading "' + deprecatedName +
        '" - WARNING: This will not be allowed in the future. Stack: ' + new Error().stack);
}

function copyPropNoWarn(obj, deprecatedName, targetName) {
    obj[deprecatedName] = obj[targetName];
}

if (logger && Object.defineProperty) {
    copyProp = function(obj, deprecatedName, targetName) {
        Object.defineProperty(obj, deprecatedName, {
          get: function() {
              deprecateWarning(deprecatedName);
              return obj[targetName];
          },
          set: function(newValue) {
              deprecateWarning(deprecatedName);
              obj[targetName] = newValue;
          },
          enumerable: true
        });
    };
} else {
    copyProp = copyPropNoWarn;
}

module.exports = function(obj, names) {
    var args = arguments;
    for (var i=1, len=args.length; i<len; i+=2) {
        var deprecatedName = args[i];
        var targetName = args[i+1];
        copyProp(obj, deprecatedName, targetName);
    }

    if (++currentWarn >= maxWarn) {
        copyProp = copyPropNoWarn;
    }

    return obj;
};