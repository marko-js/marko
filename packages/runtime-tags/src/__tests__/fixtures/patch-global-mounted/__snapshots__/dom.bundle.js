// tags/badge.marko
const $template = "<p> </p>";
const $walks = " D l";
const $count = /*@__PURE__*/ _fill_let("b3", 2, /* @__PURE__ */ _global_or(3, ($scope) => _text($scope.b, $scope.c + $scope.$.brand), /* @__PURE__ */ _global_closure("b0", /* @__PURE__ */ _global_key(5, "brand"))));
const $global2 = /*@__PURE__*/ _global_closure("b5", /* @__PURE__ */ _global_key(4), ($scope) => $global2__script($scope));
const $global2__script = _global_script("b1", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + JSON.stringify($scope.$) + "]", $global2);
const $setup__script$1 = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$global2($scope);
	$setup__script$1($scope);
	$count($scope, 0);
}
var badge_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
const $setup__script = _script("a0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, $scope.b));
