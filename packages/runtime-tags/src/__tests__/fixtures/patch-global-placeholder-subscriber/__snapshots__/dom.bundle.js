// template.marko
const $placeholder_content__$global_brand = /*@__PURE__*/ _global_closure("a0", /* @__PURE__ */ _global_key(10, "brand"));
const $placeholder_content__n = /*@__PURE__*/ _closure_get(8, /* @__PURE__ */ _global_or(1, ($scope) => _text($scope.a, $scope._.g + $scope.$.brand), $placeholder_content__$global_brand), 0, "a1");
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__n($scope);
	$placeholder_content__$global_brand($scope);
};
const $placeholder_content = _content$1("a6", "<p> </p>", "D ", $placeholder_content__setup);
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n);
const $n = _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$n__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
