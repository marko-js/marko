// template.marko
let $load_ShowAwait_tag_input_promise = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:show-await.marko.input_promise.mjs"), "_a");
const $if_content__n = /*@__PURE__*/ _init_resume("b5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $load_ShowAwait_tag_input_promise($scope.b, Promise.resolve($scope._.g))));
const $n = _let(6, $if_content__n);
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;
