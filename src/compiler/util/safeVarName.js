function safeVarName(varName) {
    var parts = varName.split(/[\\/]/);
    if (parts.length >= 2) {
        // The varname looks like it was based on a path.
        // Let's just use the last two parts
        varName = parts.slice(-2).join("_");
    }

    return varName
        .replace(/[^A-Za-z0-9_]/g, "_")
        .replace(/^[0-9]+/, function(match) {
            var str = "";
            for (var i = 0; i < match.length; i++) {
                str += "_";
            }
            return str;
        });
}

module.exports = safeVarName;
