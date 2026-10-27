// template.marko
const $placeholder_content = _content$1("a2", "loading");
const $await_content__input_label = /*@__PURE__*/ _fill_join_closure("a7", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._._.f), ($scope) => $scope._._._, "a0"), 0);
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = _resumed.a11 = /*@__PURE__*/ _await_content(0, "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _closure_get(8, ($scope) => $try_content__await_promise($scope, Promise.resolve($scope._._.g)), ($scope) => $scope._._, "a1"));
const $n = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($try_content__n));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
