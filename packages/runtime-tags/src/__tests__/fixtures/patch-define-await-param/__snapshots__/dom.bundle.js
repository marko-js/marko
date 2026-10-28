// template.marko
const $placeholder_content__id = /*@__PURE__*/ _fill_closure("a11", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "a0"), 1);
const $placeholder_content = _content$1("a9", "loading <!>", "b%", $placeholder_content__id);
const $await_content__count = /*@__PURE__*/ _init_resume("a14", /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.c, $scope._._._.g), ($scope) => $scope._._._, "a3"));
const $count = _let(6, /* @__PURE__ */ _closure($await_content__count));
const $setup__script = _script("a12", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
