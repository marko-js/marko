// template.marko
const $await_content__input_label = /*@__PURE__*/ _fill_join_closure("a4", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a0"), 0);
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = _resumed.a7 = /*@__PURE__*/ _await_content(0, "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__n = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.g))));
const $n = /*@__PURE__*/ _let(6, $if_content__n);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
