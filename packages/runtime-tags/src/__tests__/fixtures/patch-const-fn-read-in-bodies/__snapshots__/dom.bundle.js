// tags/counter.marko
const $n = /*@__PURE__*/ _fill_let("b1", 2, ($scope) => _text($scope.b, $scope.c));
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
_bind_resume("a2 d", $h);
_bind_resume("a1 f", $g);
_bind_resume("a0 g", $f);
