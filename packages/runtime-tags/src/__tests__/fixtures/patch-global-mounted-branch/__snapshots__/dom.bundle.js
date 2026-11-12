// tags/badge.marko
const $template = "<p> </p><!><!>";
const $walks = " D l%c";
const $if_content__$global_brand = /*@__PURE__*/ _global_if(/* @__PURE__ */ _global_key("brand"), 2, 0, "b0", ($scope) => _text($scope.a, $scope.$.brand));
const $if_content__setup = ($scope) => {
	$if_content__$global__script($scope);
	$if_content__$global_brand($scope);
};
const $if_content__$global__script = _global_script("b1", ($scope) => $scope._.a.dataset.log = ($scope._.a.dataset.log || "") + "[" + JSON.stringify($scope.$) + "]", /* @__PURE__ */ _global_if(/* @__PURE__ */ _global_key(), 2, 0));
const $if = /*@__PURE__*/ _if(2, "<i> </i>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _fill_let("b3", 3, ($scope) => {
	_text($scope.b, $scope.d);
	$if($scope, $scope.d >= 0 ? 0 : 1);
});
const $setup__script$1 = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
function $setup($scope) {
	$setup__script$1($scope);
	$count($scope, 0);
}
var badge_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
const $setup__script = _script("a0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, $scope.b));
