// total: 2687 (min) 1379 (brotli)
// template.marko: 240 (min) 152 (brotli)
const $resetCount2 = /* @__PURE__ */ _const(4, _script("a1", ($scope) => _on($scope.c, "click", $scope.e)));
const $count__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.d + 1);
		$count($scope, $scope.d + 1);
	});
	$scope.d;
});
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$resetCount2($scope, $resetCount($scope));
	$count__script($scope);
});
function $resetCount($scope) {
	return function() {
		if ($scope.d > 0) $count($scope, 0);
	};
}
_resume("a0", $resetCount);
