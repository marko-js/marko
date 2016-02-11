var splitLinesRegExp = /\r?\n/;
var initialIndentationRegExp = /^\s+/;

function removeInitialEmptyLines(lines) {
    var i;

    for (i=0; i<lines.length; i++) {
        if (lines[i].trim() !== '') {
            break;
        }
    }

    if (i !== 0) {
        lines = lines.slice(i);
    }

    return lines;
}

function removeTrailingEmptyLines(lines) {
    var i;
    var last = lines.length-1;

    for (i=last; i>=0; i--) {
        if (lines[i].trim() !== '') {
            break;
        }
    }

    if (i !== last) {
        lines = lines.slice(0, i+1);
    }

    return lines;
}

function adjustIndent(str, newIndentation) {
    if (!str) {
        return str;
    }

    var lines = str.split(splitLinesRegExp);
    lines = removeInitialEmptyLines(lines);
    lines = removeTrailingEmptyLines(lines);

    if (lines.length === 0) {
        return '';
    }

    var initialIndentationMatches = initialIndentationRegExp.exec(lines[0]);

    var indentation = initialIndentationMatches ? initialIndentationMatches[0] : '';
    if (!indentation && !newIndentation) {
        return str;
    }

    lines.forEach((line, i) => {
        if (line.startsWith(indentation)) {
            line = line.substring(indentation.length);
        }

        lines[i] = line;
    });

    return newIndentation ?
        lines.join('\n' + newIndentation) :
        lines.join('\n');
}

module.exports = adjustIndent;