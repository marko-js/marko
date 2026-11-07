// tags/badge.marko
const $template = "<p> </p>";
const $walks = " D l";
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("b4", 3, ($scope) => _text($scope.b, $scope.c + $scope.$.brand));
const $count = /*@__PURE__*/ _fill_let("b5", 2, $count__OR__$global_brand);
const $global_brand = _fill_global("b1", $count__OR__$global_brand, "brand");
const $global2__script = _script("b2", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + JSON.stringify($scope.$) + "]");
const $global2 = _fill_global("b0", $global2__script, "");
const $setup__script$1 = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$global_brand($scope);
	$global2($scope);
	$setup__script$1($scope);
	$count($scope, 0);
}
var badge_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
const $setup__script = _script("a0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, $scope.b));
