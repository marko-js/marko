// template.marko
const $Row_content__a__OR__b__OR__c = /*@__PURE__*/ _patch_or("a1", 8, ($scope) => _text($scope.a, $scope.e + $scope.f + $scope.h), 2);
const $Row_content__a = /*@__PURE__*/ _const(4, $Row_content__a__OR__b__OR__c);
const $n = /*@__PURE__*/ _fill_let("a5", 7, ($scope) => $Row_content__a($scope.a, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
