// template.marko
const $if_content__n__OR__m = _fill_join_if("a2", 3, /*@__PURE__*/ _init_join("a7", /*@__PURE__*/ _fill_join_if("a4", 2, /*@__PURE__*/ _or(2, ($scope) => _text($scope.b, $scope._.M + $scope._.c + $scope._.d)), 0, 0, 0)), 0, 0, 0);
const $if_content__n = _init_if_closure("a6", 0, 0, $if_content__n__OR__m);
const $if_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$for_content__n($scope._, +$scope._.c + 1);
}));
const $for_content__n = /*@__PURE__*/ _fill_let("a4", 2, $if_content__n);
