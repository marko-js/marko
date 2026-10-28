// template.marko
const $Row_content__a__OR__b__OR__c = /*@__PURE__*/ _or_resume("a2", 8, ($scope) => _text($scope.a, $scope.e + $scope.f + $scope.h), 2);
const $Row_content__a = /*@__PURE__*/ _const(4, $Row_content__a__OR__b__OR__c);
const $n = _let(7, ($scope) => $Row_content__a($scope.a, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
