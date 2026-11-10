// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $x = ($scope, x) => _text($scope["#text/0"], x.length);
function $setup($scope) {
	$x($scope, _id($scope));
}
const $y = ($scope, y) => _text($scope["#text/1"], y.length);
const $input_id = ($scope, input_id) => $y($scope, input_id || _id($scope, "IdFallback:y"));
const $input = ($scope, input) => $input_id($scope, input.id);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
