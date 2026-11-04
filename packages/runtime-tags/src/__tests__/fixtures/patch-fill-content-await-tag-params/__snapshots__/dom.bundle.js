// tags/inner.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $frame_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _or_patch("c5", 1, ($scope) => $frame_content__await_promise($scope, $scope._.g ? $scope._.e : $scope._.f), 2);
const $frame_content__showSecond = /*@__PURE__*/ _closure_get_patch("c10", 9, $frame_content__input_second__OR__input_first__OR__showSecond);
const $showSecond = /*@__PURE__*/ _fill_let("c7", 6, /* @__PURE__ */ _closure($frame_content__showSecond));
const $setup__script = _script("c6", ($scope) => _on($scope.b, "click", function() {
	$showSecond($scope, !$scope.g);
}));
