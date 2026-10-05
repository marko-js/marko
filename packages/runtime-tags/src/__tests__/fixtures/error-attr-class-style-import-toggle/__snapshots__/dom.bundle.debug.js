// styles.css.ts
const item = "x";
const on = "x";

// template.marko
const $template = /*@__PURE__*/ (() => `<div class="${"x"}"></div><button></button>`)();
const $walks = " b b";
const $on = /*@__PURE__*/ _let("on/2", ($scope) => {
	_assert_class_toggles("x", ["x"]);
	_attr_class_names($scope["#div/0"], "x", $scope.on);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
