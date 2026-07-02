// template.marko
const $MyTag_content__number = ($scope, number) => _text($scope.a, number);
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	$MyTag_content__number($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
