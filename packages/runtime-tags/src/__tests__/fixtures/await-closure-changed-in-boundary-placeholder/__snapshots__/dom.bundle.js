// tags/boundary.marko
const $placeholder_content = _content_resume("b0", "loading...");

// template.marko
const $await_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._, "a0", 2);
const $boundary_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a1", 2);
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($boundary_content__count, $await_content__count));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
