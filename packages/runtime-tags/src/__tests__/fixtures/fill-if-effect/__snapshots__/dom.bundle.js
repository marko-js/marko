// template.marko
const $if_content__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g + ": " + $scope._.h));
const $if_content__input_label__script = _script("a0", ($scope) => document.body.dataset.label = $scope._.g);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__count);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
