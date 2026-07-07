// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $x = ($scope, x) => _text($scope["#text/0"], x);
const $y = ($scope, y) => _text($scope["#text/1"], y);
function $setup($scope) {
	$x($scope, _id($scope));
	$y($scope, _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
