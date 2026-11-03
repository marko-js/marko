// template.marko
const $else_content__count = /*@__PURE__*/ _if_closure_patch("a12", 0, 2, ($scope) => _text($scope.a, $scope._.h));
const $elseif_content__input_title__OR__count = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope._.g + " @" + $scope._.h));
const $elseif_content__count = /*@__PURE__*/ _if_closure_patch("a11", 0, 1, $elseif_content__input_title__OR__count);
const $if_content__input_title__OR__count = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.g + " #" + $scope._.h));
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a10", 0, 0, $if_content__input_title__OR__count);
const $input_title__OR__count = /*@__PURE__*/ _or_patch("a8", 8, ($scope) => _text($scope.b, $scope.g + " root #" + $scope.h));
const $count = _let(7, ($scope) => {
	$input_title__OR__count($scope);
	$if_content__count($scope);
	$elseif_content__count($scope);
	$else_content__count($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
