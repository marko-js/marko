// template.marko
const $if_content__n__OR__y = /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + $scope._.g));
const $if_content__y__script = _script("a0", ($scope) => console.log("const", $scope.b));
const $if_content__n = /*@__PURE__*/ _if_closure(1, 0, $if_content__n__OR__y);
const $n = /*@__PURE__*/ _let(6, $if_content__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
