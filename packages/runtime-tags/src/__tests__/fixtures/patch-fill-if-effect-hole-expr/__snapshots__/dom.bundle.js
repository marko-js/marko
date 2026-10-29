// template.marko
const $if_content__input_label__OR__count = /*@__PURE__*/ _or_resume("a6", 1, ($scope) => _text($scope.a, $scope._.g + ": " + $scope._.i));
const $if_content__input_label__script = _script("a0", ($scope) => document.body.dataset.label = $scope._.g);
const $if_content__input_label = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => {
	$if_content__input_label__OR__count($scope);
	$if_content__input_label__script($scope);
}));
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_label__OR__count);
_fill_run("a4", 6, $if_content__input_label);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.d, $scope.i);
	$if_content__count($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
