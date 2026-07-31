// template.marko
const $template = "<div><!> <!> <!></div>";
const $walks = " D%c%c%l";
const $x = ($scope, x) => _text($scope, "#text/1", x);
const $y = ($scope, y) => _text($scope, "#text/2", y);
function $setup($scope) {
	$x($scope, _id($scope));
	$y($scope, _id($scope));
}
const $z = ($scope, z) => {
	_attr($scope, "#div/0", "id", z);
	_text($scope, "#text/3", z);
};
const $input_z = ($scope, input_z) => $z($scope, input_z || _id($scope, "IdFallback:z"));
const $input = ($scope, input) => $input_z($scope, input.z);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
