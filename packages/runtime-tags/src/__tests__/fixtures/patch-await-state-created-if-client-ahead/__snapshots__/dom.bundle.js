// template.marko
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy.marko.input_label.mjs"), "_a");
const $await_content__input_label__OR__x = /*@__PURE__*/ _fill_join_subscribers("b6", 5, /*@__PURE__*/ _or_resume("b8", 4, ($scope) => $load_Lazy_tag_input_label($scope.b, $scope._._.f + $scope.d)), 7, 0);
const $await_content__input_label = _closure_resume("b1", /*@__PURE__*/ _closure_get(7, $await_content__input_label__OR__x, ($scope) => $scope._._));
const $await_content__x__script = _script("b0", ($scope) => console.log("await", $scope.d));
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	$await_content__input_label__OR__x($scope);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__n = /*@__PURE__*/ _init_resume("b10", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.g))));
const $n = _let(6, $if_content__n);
const $setup__script = _script("b5", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// lazy.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
