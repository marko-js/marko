// template.marko
const $count = /*@__PURE__*/ _let(3);
const $log = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, ("d" in $scope ? $scope.d : 0) + 1);
	});
	_on($scope.b, "click", function() {
		$log($scope, `${"e" in $scope ? $scope.e : ""}[${"d" in $scope ? $scope.d : 0}]`);
	});
});
