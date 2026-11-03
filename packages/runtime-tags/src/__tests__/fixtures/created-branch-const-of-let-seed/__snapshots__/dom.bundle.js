// tags/view.marko
const $if_content__a__OR__c = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.c + $scope.e));
const $if_content__a = /*@__PURE__*/ _let(2, $if_content__a__OR__c);
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$if_content__a($scope, +$scope.c + 1);
}));
