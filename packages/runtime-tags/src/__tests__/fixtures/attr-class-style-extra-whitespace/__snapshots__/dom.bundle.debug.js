// styles.css.ts
const item = "x";
const on = "on";
const pair = "p q";

// template.marko
const $template = /*@__PURE__*/ (() => `<button>toggle</button><div></div><div></div><div class="${"x"}"></div><div></div>`)();
const $walks = " b b b b b";
const $on = /*@__PURE__*/ _let("on/5", ($scope) => {
	_attr_class($scope["#div/1"], ["a  b ", $scope.on ? "on" : " d  e "]);
	_attr_class($scope["#div/2"], ["f", $scope.on ? "g  h" : "i"]);
	_attr_class_names($scope["#div/3"], "p q", $scope.on);
	_attr_style($scope["#div/4"], { "color ": $scope.on && "red" });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
