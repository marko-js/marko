// under-wrapper.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = _resumed.b8 = /*@__PURE__*/ _await_content(0, "<p> </p>", "D ");
const $frame_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _fill_signal("4 b2,5 b3", /*@__PURE__*/ _or_resume("b12", 1, ($scope) => $frame_content__await_promise($scope, $scope._.g ? $scope._.e : $scope._.f), 2), _closure_subscribers, 7, 0);
const $frame_content__input_second = _closure_resume("b9", /*@__PURE__*/ _closure_get(7, $frame_content__input_second__OR__input_first__OR__showSecond));
const $frame_content__input_first = _closure_resume("b10", /*@__PURE__*/ _closure_get(8, $frame_content__input_second__OR__input_first__OR__showSecond));
const $frame_content__showSecond = /*@__PURE__*/ _init_resume("b11", /*@__PURE__*/ _closure_get(9, $frame_content__input_second__OR__input_first__OR__showSecond));
const $showSecond = /*@__PURE__*/ _fill_let("b4", 6, /* @__PURE__ */ _closure($frame_content__showSecond));
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$showSecond($scope, !$scope.g);
}));
