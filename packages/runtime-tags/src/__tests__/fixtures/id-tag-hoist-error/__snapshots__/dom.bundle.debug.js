// template.marko
const $template = "<div> </div><!>";
const $walks = "D l%b";
const $y_getter = _hoist_resume("__tests__/template.marko_0_y/hoist", "y");
const $x = ($scope, x) => _text($scope["#text/0"], x);
const $y = /* @__PURE__ */ _const("y", ($scope) => _assert_hoist($scope.y));
function $setup($scope) {
	_text($scope["#text/1"], $y_getter($scope));
	$x($scope, _id($scope));
	$y($scope, _id($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
