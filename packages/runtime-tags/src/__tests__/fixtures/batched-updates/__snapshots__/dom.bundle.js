// total: 2630 (min) 1375 (brotli)
// template.marko: 138 (min) 114 (brotli)
const $a__OR__b__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c + 1);
	$b($scope, $scope.d + 1);
}));
const $a__OR__b = /* @__PURE__ */ _or(4, ($scope) => {
	_text($scope.b, $scope.c + $scope.d);
	$a__OR__b__script($scope);
});
const $a = /* @__PURE__ */ _let(2, $a__OR__b);
const $b = /* @__PURE__ */ _let(3, $a__OR__b);
