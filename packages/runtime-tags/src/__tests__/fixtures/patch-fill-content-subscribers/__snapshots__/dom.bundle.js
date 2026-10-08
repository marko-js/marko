// template.marko
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _fill_join_subscribers("a3", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.i)), 9, 1);
const $frame_content2__input_label = _shell_closure_get("a7", 9, $frame_content2__input_label__OR__b, 0, "a13");
const $frame_content2__b = _shell_closure_get("a8", 11, $frame_content2__input_label__OR__b, 0, "a14");
const $frame_content__input_label__OR__a = /*@__PURE__*/ _fill_join_subscribers("a3", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.h)), 9, 0);
const $frame_content__input_label = _shell_closure_get("a10", 9, $frame_content__input_label__OR__a, 0, "a15");
const $frame_content__a = _shell_closure_get("a11", 10, $frame_content__input_label__OR__a, 0, "a16");
const $a = /*@__PURE__*/ _fill_let("a4", 7, /* @__PURE__ */ _closure($frame_content__a));
const $b = /*@__PURE__*/ _fill_let("a5", 8, /* @__PURE__ */ _closure($frame_content2__b));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, +$scope.h + 1);
	});
	_on($scope.d, "click", function() {
		$b($scope, +$scope.i + 1);
	});
});
