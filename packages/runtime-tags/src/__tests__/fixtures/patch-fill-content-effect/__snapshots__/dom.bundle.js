// template.marko
const $frame_content__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.f + ": " + $scope._.g));
const $frame_content__input_label__script = _script("a0", ($scope) => document.body.dataset.label = $scope._.f);
const $frame_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => {
	$frame_content__input_label__OR__count($scope);
	$frame_content__input_label__script($scope);
}, 0, "a1");
const $frame_content__count = /*@__PURE__*/ _closure_get(8, $frame_content__input_label__OR__count, 0, "a2");
const $count__closure = /*@__PURE__*/ _closure($frame_content__count);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label);
const $input_label = fill("a5", /*@__PURE__*/ _const(5, $input_label__closure));
