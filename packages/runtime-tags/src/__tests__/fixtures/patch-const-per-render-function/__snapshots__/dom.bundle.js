// tags/shower.marko
const $shown = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, $scope.d.getId());
}));

// template.marko
const $getId = ($scope) => function() {
	return $scope.j;
};
_resumed.a0 = $getId;
