// total: 2817 (min) 1431 (brotli)
// template.marko: 164 (min) 125 (brotli)
const $bar__OR__$fooChange = /* @__PURE__ */ _or(7, _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.d + 1);
})));
const $bar = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$bar__OR__$fooChange($scope);
});
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("a0", $foo);
