// template.marko
const $if_content__input_name__OR__uid = /*@__PURE__*/ _or_resume("a4", 1, ($scope) => _text($scope.a, $scope._.i + "-" + $scope._.h));
const $if_content__input_name = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_name__OR__uid);
const $if_content__uid = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_name__OR__uid);
const $uid = _let(8, $if_content__uid);
const $n = /*@__PURE__*/ _let(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.j + 1);
}));
const $input_name = fill("a2", /*@__PURE__*/ _const(7, $if_content__input_name));
