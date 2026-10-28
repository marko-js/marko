// template.marko
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or_resume("a8", 2, ($scope) => _text($scope.b, $scope._._.g + ":" + $scope._._.i)), _closure_subscribers, 9, 1);
const $frame_content2__input_label = _closure_resume("a6", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get(9, $frame_content2__input_label__OR__b, ($scope) => $scope._._)));
const $frame_content2__b = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _closure_get(11, ($scope) => {
	_text($scope.a, $scope._._.i);
	$frame_content2__input_label__OR__b($scope);
}, ($scope) => $scope._._));
const $frame_content__input_label__OR__a = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or_resume("a12", 1, ($scope) => _text($scope.a, $scope._._.g + ":" + $scope._._.h)), _closure_subscribers, 9, 0);
const $frame_content__input_label = _closure_resume("a10", /*@__PURE__*/ _closure_get(9, $frame_content__input_label__OR__a, ($scope) => $scope._._));
const $frame_content__a = /*@__PURE__*/ _init_resume("a11", /*@__PURE__*/ _closure_get(10, $frame_content__input_label__OR__a, ($scope) => $scope._._));
const $a = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($frame_content__a));
const $b = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($frame_content2__b));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.b, "click", function() {
		$a($scope, +$scope.h + 1);
	});
	_on($scope.c, "click", function() {
		$b($scope, $scope.i + 10);
	});
});
