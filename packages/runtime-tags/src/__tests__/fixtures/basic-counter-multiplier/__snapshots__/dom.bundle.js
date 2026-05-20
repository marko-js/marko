// total: 2716 (min) 1403 (brotli)
// template.marko: 236 (min) 139 (brotli)
const $multipliedCount = ($scope, multipliedCount) => _text($scope.d, multipliedCount);
const $count__OR__multiplier = /* @__PURE__ */ _or(6, ($scope) => $multipliedCount($scope, $scope.e * $scope.f));
const $count__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	$count__OR__multiplier($scope);
	$count__script($scope);
});
const $multiplier__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$multiplier($scope, $scope.f + 1);
}));
const $multiplier = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__OR__multiplier($scope);
	$multiplier__script($scope);
});
