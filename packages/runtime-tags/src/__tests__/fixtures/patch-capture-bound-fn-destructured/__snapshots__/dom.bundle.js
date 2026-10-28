// tags/child.marko
const $shown = _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, $scope.f());
}));

// template.marko
const $fn = ($scope) => () => $scope.d;
_bind_resume("a0 d", $fn);
