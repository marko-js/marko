// template.marko
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _fill_join_subscribers("a0", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.i)), () => $frame_content2__input_label, 1);
const $frame_content2__input_label = /*@__PURE__*/ _closure_get(9, $frame_content2__input_label__OR__b);
const $frame_content2__b = /*@__PURE__*/ _closure_get(11, $frame_content2__input_label__OR__b);
const $frame_content__input_label__OR__a = /*@__PURE__*/ _fill_join_subscribers("a0", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.h)), () => $frame_content__input_label, 0);
const $frame_content__input_label = /*@__PURE__*/ _closure_get(9, $frame_content__input_label__OR__a);
const $frame_content__a = /*@__PURE__*/ _closure_get(10, $frame_content__input_label__OR__a);
const $a = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($frame_content__a));
const $b = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($frame_content2__b));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, +$scope.h + 1);
	});
	_on($scope.d, "click", function() {
		$b($scope, +$scope.i + 1);
	});
});
