// template.marko
const $await_content__item = /*@__PURE__*/ _fill_closure("a1", 2, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.c), 0, "a0"), 0);
const $await_content__setup = $await_content__item;
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = _resumed.a7 = /*@__PURE__*/ _await_content(0, "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__n = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__await_promise($scope, Promise.resolve($scope._.f))));
const $n = /*@__PURE__*/ _let(5, $for_content__n);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
