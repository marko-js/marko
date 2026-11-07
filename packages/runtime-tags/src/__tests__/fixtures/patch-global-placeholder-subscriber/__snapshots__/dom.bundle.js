// template.marko
const $placeholder_content__n__OR__$global_brand = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.g + $scope.$.brand));
const $placeholder_content__n = /*@__PURE__*/ _closure_get(8, $placeholder_content__n__OR__$global_brand, 0, "a1");
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__n($scope);
	$placeholder_content__$global_brand($scope);
};
const $placeholder_content__$global_brand = /*@__PURE__*/ _closure_get_patch("a2", 9, $placeholder_content__n__OR__$global_brand);
const $placeholder_content = _content$1("a7", "<p> </p>", "D ", $placeholder_content__setup);
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n);
const $n = _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$n__closure($scope);
});
const $global_brand = _fill_global("a8", /* @__PURE__ */ _closure($placeholder_content__$global_brand), "brand");
const $setup__script = _script("a9", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
