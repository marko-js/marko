// template.marko
const $if_content__n__OR__m = /*@__PURE__*/ _fill_join_if("a0", 3, /*@__PURE__*/ _or_resume("a9", 2, ($scope) => _text($scope.b, $scope._.M + $scope._.c + $scope._.d)), 0, 0);
const $if_content__n = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _if_closure(0, 0, $if_content__n__OR__m));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__n($scope._, +$scope._.c + 1);
}));
const $for_content__n = /*@__PURE__*/ _fill_let("a5", 2, $if_content__n);
