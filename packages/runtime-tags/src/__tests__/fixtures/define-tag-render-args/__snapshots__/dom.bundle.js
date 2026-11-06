// template.marko
const $Outer_content__v = ($scope, v) => $MyTag_content__a($scope.a, v);
const $MyTag_content__a__OR__$c = /*@__PURE__*/ _or(7, ($scope) => _text($scope.c, void 0 !== $scope.g ? $scope.g : $scope.e + 1));
const $MyTag_content__a = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$MyTag_content__a__OR__$c($scope);
});
const $MyTag_content__$c = /*@__PURE__*/ _const(6, $MyTag_content__a__OR__$c);
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$MyTag_content__$c($scope.a, $scope.f);
	$MyTag_content__a($scope.b, $scope.f);
	$Outer_content__v($scope.c, $scope.f);
	_text($scope.e, $scope.f);
});
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$x($scope, +$scope.f + 1);
}));
