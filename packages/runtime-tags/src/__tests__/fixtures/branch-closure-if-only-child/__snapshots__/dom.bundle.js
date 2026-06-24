// template.marko
const $count__script = _script$1("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	_text($scope.d, `${_to_text($scope.e)}`);
	$count__script($scope);
});
const $setup__script = _script$1("a0", ($scope) => _on($scope.c, "click", function() {}));
