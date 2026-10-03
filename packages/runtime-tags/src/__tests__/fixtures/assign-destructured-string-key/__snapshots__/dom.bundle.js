// template.marko
const $bar = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $mykeyChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.d + 1);
}));
const $myKeyValue = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed.a0 = $myKeyValue;
