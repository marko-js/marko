// template.marko
const $MyTag_content__c = ($scope, c) => _text($scope.b, c);
const $Wrap_content__x = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a2");
const $x__closure = /*@__PURE__*/ _closure($Wrap_content__x);
const $x = /*@__PURE__*/ _let(4, ($scope) => {
	$MyTag_content__c($scope.a, $scope.e);
	_text($scope.d, $scope.e);
	$x__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$x($scope, +$scope.e + 1);
}));
