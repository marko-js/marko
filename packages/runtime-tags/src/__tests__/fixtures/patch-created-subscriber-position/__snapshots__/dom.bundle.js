// template.marko
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _or_patch("a4", 2, ($scope) => _text($scope.b, $scope._._.g + ":" + $scope._._.i));
const $frame_content2__b = /*@__PURE__*/ _closure_get_patch("a10", 11, ($scope) => {
	_text($scope.a, $scope._._.i);
	$frame_content2__input_label__OR__b($scope);
}, ($scope) => $scope._._);
const $frame_content__input_label__OR__a = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope._._.g + ":" + $scope._._.h));
const $frame_content__a = /*@__PURE__*/ _closure_get_patch("a12", 10, $frame_content__input_label__OR__a, ($scope) => $scope._._);
const $a = _let(7, /* @__PURE__ */ _closure($frame_content__a));
const $b = _let(8, /* @__PURE__ */ _closure($frame_content2__b));
const $setup__script = _script("a7", ($scope) => {
	_on($scope.b, "click", function() {
		$a($scope, +$scope.h + 1);
	});
	_on($scope.c, "click", function() {
		$b($scope, $scope.i + 10);
	});
});
