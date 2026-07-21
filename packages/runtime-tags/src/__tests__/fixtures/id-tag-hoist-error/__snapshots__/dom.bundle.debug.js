// template.marko
const $template = "<div> </div><!>";
const $walks = "D l%b";
const $y_getter = _hoist_resume("__tests__/template.marko_0_y/hoist", "y");
const $x = /*@__PURE__*/ _render(($scope, x) => _text($scope["#text/0"], x));
const $y = /*@__PURE__*/ _const("y", ($scope) => _assert_hoist($scope.y));
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $y_getter($scope)));
function $setup($scope) {
	$setup__render($scope);
	$x($scope, _id($scope));
	$y($scope, _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
