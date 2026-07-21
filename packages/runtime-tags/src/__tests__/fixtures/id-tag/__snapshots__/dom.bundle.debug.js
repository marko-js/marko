// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $x = /*@__PURE__*/ _render(($scope, x) => _text($scope["#text/0"], x));
const $y = /*@__PURE__*/ _render(($scope, y) => _text($scope["#text/1"], y));
function $setup($scope) {
	$x($scope, _id($scope));
	$y($scope, _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
