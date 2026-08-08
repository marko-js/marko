// template.marko
const $template = "<div id=plain></div><div id=commented></div><div id=withBody>body wins</div>";
const $walks = " d";
const $Note_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span>note</span>");
const $Note = ($scope, Note) => _attr_content($scope, "#div/0", Note);
function $setup($scope) {
	$Note($scope, { content: $Note_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " d", $setup);
