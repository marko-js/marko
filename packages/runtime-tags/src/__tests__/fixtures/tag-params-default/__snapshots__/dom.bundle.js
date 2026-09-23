// template.marko
const $child_content__y = ($scope, y) => _text($scope.a, y);
const $child_content__fallback__OR__$y = /*@__PURE__*/ _or(3, ($scope) => $child_content__y($scope, void 0 !== $scope.c ? $scope.c : $scope._.d));
const $child_content__fallback = /*@__PURE__*/ _closure_get(4, $child_content__fallback__OR__$y);
const $fallback = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($child_content__fallback));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$fallback($scope, $scope.d + "!");
}));
