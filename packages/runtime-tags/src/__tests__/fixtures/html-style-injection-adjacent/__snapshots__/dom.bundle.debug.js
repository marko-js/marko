// template.marko
const $template = "<style></style>";
const $walks = " b";
const $open__OR__close = /*@__PURE__*/ _or(3, ($scope) => _text_content($scope, "#style/0", `.a { color: red }${_to_text($scope.open)}${_to_text($scope.close)}`));
const $open = /*@__PURE__*/ _let("open/1", $open__OR__close);
const $close = /*@__PURE__*/ _let("close/2", $open__OR__close);
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	$open($scope, "<");
	$close($scope, "/style><img src=x onerror=alert(1)>");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
