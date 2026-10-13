// template.marko
const $placeholder_content__id = /*@__PURE__*/ _fill_join_closure("a11", 3, _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "a4"), 1);
const $placeholder_content = _content$1("a10", "loading <!>", "b%", $placeholder_content__id);
const $await_content__count = _resumed.a15 = _closure_get(7, ($scope) => _text($scope.c, $scope._._._.g), ($scope) => $scope._._._, "a6");
const $await_content__id = /*@__PURE__*/ _fill_join_closure("a11", 3, _shell_subscribe_closure_get("a5", 8, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a7"), 0);
const $count = /*@__PURE__*/ _fill_let("a13", 6, /* @__PURE__ */ _closure($await_content__count));
const $setup__script = _script("a12", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
