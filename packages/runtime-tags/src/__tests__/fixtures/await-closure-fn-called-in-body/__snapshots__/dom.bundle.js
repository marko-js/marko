// template.marko
const $placeholder_content = _content_resume("a4", "loading");
const $await_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.c, $scope._._.b), ($scope) => $scope._._, "a1");
const $await_content__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope._._, +$scope._._.b + 1);
}));
const $await_content__view = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.c()), ($scope) => $scope._._, "a2");
const $view2 = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($await_content__view));
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$view2($scope, $view($scope));
	$count__closure($scope);
});
const $view = ($scope) => () => $scope.b;
_resume("a0", $view);
