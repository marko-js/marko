// total: 2685 (min) 1375 (brotli)
// tags/counter.marko: 129 (min) 113 (brotli)
const $input__OR__count = /* @__PURE__ */ _or(5, ($scope) => _text($scope.b, $scope.d.format($scope.e)));
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	$input__OR__count($scope);
	$count__script($scope);
});

// template.marko: 106 (min) 65 (brotli)
function $formatNumber(n) {
	return "$" + n.toFixed(2);
}
function $formatNumber2(n) {
	return "$" + n.toFixed(2);
}
_resume("a0", $formatNumber);
_resume("a1", $formatNumber2);
