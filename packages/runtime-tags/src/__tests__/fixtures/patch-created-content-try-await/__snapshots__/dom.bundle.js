// template.marko
const $await_content__input_id = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._._._.e), ($scope) => $scope._._._, "a8", 1);
const $await_content__setup = $await_content__input_id;
const $await_content__$params = ($scope, $params2) => _text($scope.b, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_value = /*@__PURE__*/ _closure_get_patch("a6", 7, ($scope) => $try_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a9", 0);
const $try_content__setup = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $placeholder_content__input_id = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a8", 0);
const $placeholder_content = _content$1("a7", "loading <!>", "b%", $placeholder_content__input_id);
const $wrap_content = _content$1("a5", "<!><!><!>", "b%", /* @__PURE__ */ _try(0, "<!><!><!>", "b%", $try_content__setup, $placeholder_content));
