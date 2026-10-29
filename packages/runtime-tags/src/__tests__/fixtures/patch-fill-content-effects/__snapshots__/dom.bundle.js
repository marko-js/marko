// template.marko
const $frame_content3__input_title__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.i + ": " + $scope._.j));
const $frame_content3__input_title__script = _script("a8", ($scope) => document.body.dataset.title = $scope._.i);
const $frame_content3__input_title = /*@__PURE__*/ _closure_get(11, ($scope) => {
	$frame_content3__input_title__OR__count($scope);
	$frame_content3__input_title__script($scope);
}, 0, "a9");
const $frame_content3__count = /*@__PURE__*/ _closure_get(12, $frame_content3__input_title__OR__count, 0, "a10");
const $frame_content2__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.h + ": " + $scope._.j));
const $frame_content2__input_label__script = _script("a4", ($scope) => document.body.dataset.second = $scope._.h);
const $frame_content2__input_label = /*@__PURE__*/ _closure_get(10, ($scope) => {
	$frame_content2__input_label__OR__count($scope);
	$frame_content2__input_label__script($scope);
}, 0, "a5");
const $frame_content2__count = /*@__PURE__*/ _closure_get(12, $frame_content2__input_label__OR__count, 0, "a6");
const $frame_content__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.h + ": " + $scope._.j));
const $frame_content__input_label__script = _script("a0", ($scope) => document.body.dataset.first = $scope._.h);
const $frame_content__input_label = /*@__PURE__*/ _closure_get(10, ($scope) => {
	$frame_content__input_label__OR__count($scope);
	$frame_content__input_label__script($scope);
}, 0, "a1");
const $frame_content__count = /*@__PURE__*/ _closure_get(12, $frame_content__input_label__OR__count, 0, "a2");
const $count__closure = /*@__PURE__*/ _closure($frame_content__count, $frame_content2__count, $frame_content3__count);
const $count = /*@__PURE__*/ _let(9, ($scope) => {
	_text($scope.e, $scope.j);
	$count__closure($scope);
});
const $setup__script = _script("a12", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.j + 1);
}));
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label, $frame_content2__input_label);
const $input_label = fill("a13", /*@__PURE__*/ _const(7, $input_label__closure));
const $input_title__closure = /*@__PURE__*/ _closure($frame_content3__input_title);
const $input_title = fill("a14", /*@__PURE__*/ _const(8, $input_title__closure));
