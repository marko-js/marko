// template.marko
const $template = "<script><\/script>";
const $walks = " b";
const $open__OR__close__OR__payload = /*@__PURE__*/ _or(4, ($scope) => _text_content($scope, "#script/0", `var x = '${_to_text($scope.open)}${_to_text($scope.close)}${_to_text($scope.payload)}'`), 2);
const $open = /*@__PURE__*/ _let("open/1", $open__OR__close__OR__payload);
const $close = /*@__PURE__*/ _let("close/2", $open__OR__close__OR__payload);
const $payload = /*@__PURE__*/ _let("payload/3", $open__OR__close__OR__payload);
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
	$open($scope, "<");
	$close($scope, "/script>");
	$payload($scope, "<img src=x onerror=alert(1)>");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
