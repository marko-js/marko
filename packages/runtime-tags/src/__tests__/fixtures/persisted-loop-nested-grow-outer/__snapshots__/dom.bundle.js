// template.marko
const $for_content2__count__OR__row_id = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + "@" + $scope._._.f));
const $for_content2__count = /*@__PURE__*/ _closure_get(6, $for_content2__count__OR__row_id, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
