// template.marko
const $await_content2__x = ($scope, x) => _text($scope.b, x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $await_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $await_content__n = /*@__PURE__*/ _init_resume("a13", /*@__PURE__*/ _closure_get(8, ($scope) => $await_content__await_promise($scope, Promise.resolve($scope._._.g)), ($scope) => $scope._._, "a7"));
const $n = _let(6, /* @__PURE__ */ _closure($await_content__n));
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
