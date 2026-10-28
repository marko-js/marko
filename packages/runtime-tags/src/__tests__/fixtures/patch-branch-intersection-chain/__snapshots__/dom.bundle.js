// template.marko
const $else_content__count = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _if_closure(0, 2, ($scope) => _text($scope.a, $scope._.h)));
const $elseif_content__input_title__OR__count = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or_resume("a7", 1, ($scope) => _text($scope.a, $scope._.g + " @" + $scope._.h)), _if_closure, 0, 1);
const $elseif_content__count = /*@__PURE__*/ _if_closure(0, 1, $elseif_content__input_title__OR__count);
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or_resume("a6", 1, ($scope) => _text($scope.a, $scope._.g + " #" + $scope._.h)), _if_closure, 0, 0);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_title__OR__count);
const $input_title__OR__count = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or(8, ($scope) => _text($scope.b, $scope.g + " root #" + $scope.h)));
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	$input_title__OR__count($scope);
	$if_content__count($scope);
	$elseif_content__count($scope);
	$else_content__count($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
