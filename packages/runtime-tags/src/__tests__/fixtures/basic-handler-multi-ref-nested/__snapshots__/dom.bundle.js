// total: 2637 (min) 1376 (brotli)
// template.marko: 130 (min) 111 (brotli)
const $a__OR__b__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c.map((a) => $scope.d));
}));
const $a__OR__b = /* @__PURE__ */ _or(4, $a__OR__b__script);
const $a = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c.join(""));
	$a__OR__b($scope);
});
