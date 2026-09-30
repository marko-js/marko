// a.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
}));

// b.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + Object.keys($scope.h).length);
}));

// c.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + (Object.keys($scope.e).length + Object.keys($scope.f).length));
}));
