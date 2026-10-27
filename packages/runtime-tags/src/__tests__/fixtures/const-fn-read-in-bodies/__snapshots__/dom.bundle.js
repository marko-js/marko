// tags/counter.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));

// template.marko
const $h = ($scope) => function() {
	return $scope.d;
};
const $g = ($scope) => function() {
	return $scope.f;
};
const $f = ($scope) => function() {
	return $scope.g;
};
_resumed.a2 = $h;
_resumed.a1 = $g;
_resumed.a0 = $f;
