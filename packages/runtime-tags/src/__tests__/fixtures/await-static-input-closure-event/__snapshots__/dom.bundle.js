// template.marko
const data = Promise.resolve({ items: ["a", "b"] });
const $placeholder_content = _content_resume("a3", "Loading");
const $await_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._._, +$scope._._.e + 1);
}));
const $await_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a1");
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($await_content__count));
