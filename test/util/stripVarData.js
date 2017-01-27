var varDataStr = "\n  var data = input;\n";

function stripVarData(src) {
    var index = src.indexOf(varDataStr);

    if (index !== -1) {
        src = src.substring(0, index) + src.substring(index + varDataStr.length);
    }
    return src;
}

module.exports = stripVarData;