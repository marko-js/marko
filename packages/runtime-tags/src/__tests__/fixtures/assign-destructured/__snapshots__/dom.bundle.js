// template.marko
const $bar = /* @__PURE__ */ _let(3, ($scope) => _text($scope.c, $scope.d));
const $fooChange2 = /* @__PURE__ */ _const(6, _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.d + 1);
})));
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("a0", $foo);
