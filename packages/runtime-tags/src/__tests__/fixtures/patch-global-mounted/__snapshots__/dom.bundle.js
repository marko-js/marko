// tags/badge.marko
const $template = "<p> </p>";
const $walks = " D l";
const $count = /*@__PURE__*/ _fill_let("b3", 2, /* @__PURE__ */ _fill_global("b1", ($scope) => _text($scope.b, $scope.c + $scope.$.brand), "brand"));
const $setup__$global = _fill_global_script("b0", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + JSON.stringify($scope.$) + "]", "");
const $setup__script$1 = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$setup__$global($scope);
	$setup__script$1($scope);
	$count($scope, 0);
}
var badge_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
const $setup__script = _script("a0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, $scope.b));
