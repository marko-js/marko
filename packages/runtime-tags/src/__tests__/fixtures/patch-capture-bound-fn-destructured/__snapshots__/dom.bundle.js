// tags/child.marko
const $shown = /*@__PURE__*/ _fill_let("b0", 7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, $scope.f());
}));

// template.marko
const $fn = ($scope) => () => $scope.d;
_resumed.a0 = $fn;
