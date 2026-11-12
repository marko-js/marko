// tags/badge.marko
const $template = "<p> </p>";
const $walks = " D l";
const $count = /*@__PURE__*/ _fill_let("b3", 2, /* @__PURE__ */ _global_or(($scope) => _text($scope.b, $scope.c + $scope.$.brand), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand"), "b0")));
const $setup__script$1 = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$global2__script($scope);
	$setup__script$1($scope);
	$count($scope, 0);
}
const $global2__script = _global_script("b1", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + JSON.stringify($scope.$) + "]", /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key()));
var badge_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
const $setup__script = _script("a0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, $scope.b));
