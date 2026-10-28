// template.marko
const $wrapper_content__count__OR__label = /*@__PURE__*/ _fill_signal("1 a0", /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + $scope._.f)));
const $wrapper_content__count = /*@__PURE__*/ _closure_get(7, $wrapper_content__count__OR__label, 0, "a3");
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($wrapper_content__count));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
