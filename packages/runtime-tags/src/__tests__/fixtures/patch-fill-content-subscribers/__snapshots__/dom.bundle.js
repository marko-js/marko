// template.marko
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _or_patch("a4", 1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.i));
const $frame_content2__b = /*@__PURE__*/ _closure_get(11, $frame_content2__input_label__OR__b, 0, "a6");
const $frame_content__input_label__OR__a = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.g + ":" + $scope._.h));
const $frame_content__a = /*@__PURE__*/ _closure_get(10, $frame_content__input_label__OR__a, 0, "a2");
const $a = _let(7, /* @__PURE__ */ _closure($frame_content__a));
const $b = _let(8, /* @__PURE__ */ _closure($frame_content2__b));
const $setup__script = _script("a8", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, +$scope.h + 1);
	});
	_on($scope.d, "click", function() {
		$b($scope, +$scope.i + 1);
	});
});
