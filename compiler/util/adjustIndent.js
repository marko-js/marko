var splitLinesRegExp = /\r?\n/;
var initialIndentationRegExp = /^\s+/;

// var initialSpaceMatches = /^\s+/.exec(text);
//             if (initialSpaceMatches) {
//                 var indentMatches = /\n[^\n]*$/.exec(initialSpaceMatches[0]);
//                 if (indentMatches) {
//                     var indentRegExp = new RegExp(indentMatches[0].replace(/\n/g, '\\n'), 'g');
//                     text = text.replace(indentRegExp, '\n');
//                 }
//                 text = text.replace(/^\s*/, '').replace(/\s*$/, '');
//                 this.setText(text);
//             }
function adjustIndent(str, newIndentation) {
    if (!str) {
        return str;
    }

    var lines = str.split(splitLinesRegExp);
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
        newIndentation + lines.join('\n' + newIndentation) :
        lines.join('\n');
}

// function adjustIndent(str, newIndentation) {
//     if (!str) {
//         return str;
//     }
//
//     var lines = str.split(splitLinesRegExp);
//     var initialIndentationMatches = initialIndentationRegExp.exec(lines[0]);
//
//     var indentation = initialIndentationMatches ? initialIndentationMatches[0] : '';
//     if (!indentation && !newIndentation) {
//         return str;
//     }
//
//     var result = '';
//
//     lines.forEach((line, i) => {
//         if (line.startsWith(indentation)) {
//             line = line.substring(indentation.length);
//         }
//
//         if (newIndentation) {
//             line = newIndentation + line;
//         }
//
//         result += line + '\n';
//     });
//
//     return result;
// }
module.exports = adjustIndent;