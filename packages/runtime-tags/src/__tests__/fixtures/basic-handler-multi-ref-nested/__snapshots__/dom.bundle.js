// template.marko
const $a__OR__b = /*@__PURE__*/ _or(4, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c.map((a) => $scope.d));
})));
const $a = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c.join(""));
	$a__OR__b($scope);
});
