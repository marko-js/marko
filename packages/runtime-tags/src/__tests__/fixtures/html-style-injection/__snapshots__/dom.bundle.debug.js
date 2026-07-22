// template.marko
const $template = "<style></style>";
const $walks = " b";
const $injection = /*@__PURE__*/ _let("injection/1", ($scope) => _text_content($scope["#style/0"], `.evil { content: '${_to_text($scope.injection)}'; }`));
const $setup__render = /*@__PURE__*/ _render(($scope) => _attr_nonce($scope, "#style/0"));
function $setup($scope) {
	$setup__render($scope);
	$injection($scope, "</STYLE>");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
