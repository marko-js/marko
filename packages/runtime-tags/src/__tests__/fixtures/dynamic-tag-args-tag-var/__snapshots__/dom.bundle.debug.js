// tags/custom-tag.marko
const $template$1 = "<div>Child: <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_text($scope["#text/0"], $scope.input);
	_return($scope, $scope.input);
});
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button>Count: <!></button><!><div>Parent: <!></div>";
const $walks = " Db%l1bDb%l";
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2", 0, () => $y, 1);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/5", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$dynamicTag($scope, tags[0], () => [$scope.x]);
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, 1);
}
const $y = _var_resume("__tests__/template.marko_0_y/var", ($scope, y) => _text($scope["#text/4"], y));
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
