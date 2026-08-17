// template.marko
const $for_content2__count__OR__row_id = /*@__PURE__*/ _fill_join_for("a0", 4, /*@__PURE__*/ _init_join("a6", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + "@" + $scope._._.f))), 0);
const $for_content2__count = /*@__PURE__*/ _init_closure_get("a5", 6, $for_content2__count__OR__row_id, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
