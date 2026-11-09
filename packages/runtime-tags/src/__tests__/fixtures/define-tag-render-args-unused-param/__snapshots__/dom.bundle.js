// template.marko
const $MyTag_content__c = ($scope, c) => _text($scope.b, c);
const $Wrap_content__x = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.f), 0, "a3");
const $x__closure = /*@__PURE__*/ _closure($Wrap_content__x);
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$MyTag_content__c($scope.a, $scope.f);
	_text($scope.e, $scope.f);
	$x__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.d, "click", function() {
	$x($scope, +$scope.f + 1);
}));
