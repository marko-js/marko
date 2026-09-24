// template.marko
const $for_content2__count = /*@__PURE__*/ _init_closure_get("a5", 6, ($scope) => _text($scope.a, $scope._.M + "@" + $scope._._.f), ($scope) => $scope._._, "a2", 5);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
