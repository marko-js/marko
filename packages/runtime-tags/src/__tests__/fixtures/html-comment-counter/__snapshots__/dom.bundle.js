// template.marko
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	_text($scope.c, `${_to_text($scope.d)} + ${_to_text($scope.d)} = ${_to_text($scope.d + $scope.d)}`);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
