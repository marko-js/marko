// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $frame_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _fill_join_subscribers("a5", 5, /*@__PURE__*/ _fill_join_subscribers("a4", 4, /*@__PURE__*/ _or(1, ($scope) => $frame_content__await_promise($scope, $scope._.g ? $scope._.e : $scope._.f), 2), 7, 0), 8, 0);
const $frame_content__input_second = _shell_closure_get("a9", 7, $frame_content__input_second__OR__input_first__OR__showSecond, 0, "a13");
const $frame_content__input_first = _shell_closure_get("a10", 8, $frame_content__input_second__OR__input_first__OR__showSecond, 0, "a14");
const $frame_content__showSecond = _shell_closure_get("a11", 9, $frame_content__input_second__OR__input_first__OR__showSecond, 0, "a15");
const $showSecond = /*@__PURE__*/ _fill_let("a6", 6, /* @__PURE__ */ _closure($frame_content__showSecond));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$showSecond($scope, !$scope.g);
}));
