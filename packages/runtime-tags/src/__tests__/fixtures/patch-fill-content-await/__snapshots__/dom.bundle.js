// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $frame_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _fill_join_subscribers("a1", 5, /*@__PURE__*/ _fill_join_subscribers("a0", 4, /*@__PURE__*/ _or(1, ($scope) => $frame_content__await_promise($scope, $scope._.g ? $scope._.e : $scope._.f), 2), () => $frame_content__input_second, 0), () => $frame_content__input_first, 0);
const $frame_content__input_second = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(7, $frame_content__input_second__OR__input_first__OR__showSecond), 0);
const $frame_content__input_first = /*@__PURE__*/ _fill_join_closure("a1", 5, /*@__PURE__*/ _closure_get(8, $frame_content__input_second__OR__input_first__OR__showSecond), 0);
const $frame_content__showSecond = /*@__PURE__*/ _closure_get(9, $frame_content__input_second__OR__input_first__OR__showSecond);
const $showSecond = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($frame_content__showSecond));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$showSecond($scope, !$scope.g);
}));
