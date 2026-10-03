// template.marko
const $bar = /*@__PURE__*/ _let(4, ($scope) => _text($scope.d, $scope.e));
const $fooChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.h($scope.e + 1);
}));
const $obj = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed.a0 = $obj;
