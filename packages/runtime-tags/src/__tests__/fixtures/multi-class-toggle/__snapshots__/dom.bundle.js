// total: 3057 (min) 1530 (brotli)
// template.marko: 144 (min) 130 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_class($scope.a, {
		"a b c": true,
		"d e f": $scope.c % 2
	});
	_text($scope.b, $scope.c);
	$count__script($scope);
});
