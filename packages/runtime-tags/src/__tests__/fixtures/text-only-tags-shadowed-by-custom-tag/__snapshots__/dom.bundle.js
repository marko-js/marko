// template.marko
const $textarea_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d));
const $title_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d));
const $n = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($title_content__n, $textarea_content__n));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
