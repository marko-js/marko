// template.marko
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_class($scope.a, {
		"a b c": true,
		"d e f": $scope.c % 2
	});
	_text($scope.b, $scope.c);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
