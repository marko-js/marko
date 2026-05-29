// total: 2785 (min) 1422 (brotli)
// template.marko: 126 (min) 110 (brotli)
const $a__OR__b = /* @__PURE__ */ _or(4, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c.map((a) => $scope.d));
})));
const $a = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c.join(""));
	$a__OR__b($scope);
});
