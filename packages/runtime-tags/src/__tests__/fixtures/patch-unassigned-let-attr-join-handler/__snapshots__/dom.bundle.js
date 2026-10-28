// template.marko
const $input_name__OR__uid = /*@__PURE__*/ _or(12, ($scope) => {
	_attr($scope.a, "for", `${$scope.l}-${$scope.i}`);
	_attr($scope.c, "id", `${$scope.l}-${$scope.i}`);
});
const $uid = _let(11, $input_name__OR__uid);
const $shown = /*@__PURE__*/ _let(13, ($scope) => _text($scope.e, $scope.n));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$shown($scope, $scope.l);
}));
_fill_run("a1", 8, $input_name__OR__uid);
