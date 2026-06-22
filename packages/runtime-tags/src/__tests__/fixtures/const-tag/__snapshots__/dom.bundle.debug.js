// template.marko
const $template = "<div>1<!></div><!>";
const $walks = "Db%l%b";
const $y_getter = _hoist_resume("__tests__/template.marko_0_y/hoist", "y");
const $y2 = /* @__PURE__ */ _const("y", ($scope) => {
	_text($scope["#text/0"], $scope.y());
	_assert_hoist($scope.y);
});
function $setup($scope) {
	_text($scope["#text/1"], typeof $y_getter($scope));
	$y2($scope, $y);
}
function $y() {
	return 1;
}
_resume("__tests__/template.marko_0/y", $y);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
