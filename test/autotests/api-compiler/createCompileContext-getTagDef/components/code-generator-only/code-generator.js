const marked = require('marked');

function removeIndentation (str) {
  var indentMatches = /\s*\n(\s+)/.exec(str);
  if (indentMatches) {
    var indent = indentMatches[1];
    str = str.replace(new RegExp('^' + indent, 'mg'), '');
  }
  return str;
}

module.exports = function (el, codegen) {
  var bodyText = removeIndentation(el.bodyText);
  var builder = codegen.builder;
  var html = marked(bodyText);
  return builder.html(builder.literal(html));
};
