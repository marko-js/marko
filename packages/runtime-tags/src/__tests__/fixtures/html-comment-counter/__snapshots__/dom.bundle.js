// total: 2508 (min) 1307 (brotli)
// template.marko: 172 (min) 124 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	_text($scope.c, `${_to_text($scope.d)} + ${_to_text($scope.d)} = ${_to_text($scope.d + $scope.d)}`);
	$count__script($scope);
});
