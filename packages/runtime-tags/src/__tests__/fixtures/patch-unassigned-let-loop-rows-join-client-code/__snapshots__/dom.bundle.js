// template.marko
const $for_content__uid__OR__item = /*@__PURE__*/ _fill_join("a0", 2, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.h + "-" + $scope.c)));
const $for_content__uid = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _for_closure(0, $for_content__uid__OR__item));
const $uid = _let(7, $for_content__uid);
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.i + 1);
}));
