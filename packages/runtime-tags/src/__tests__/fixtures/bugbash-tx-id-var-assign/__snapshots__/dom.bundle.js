// template.marko
const $y = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	"changed";
	$y($scope, $scope.e + 1);
}));
