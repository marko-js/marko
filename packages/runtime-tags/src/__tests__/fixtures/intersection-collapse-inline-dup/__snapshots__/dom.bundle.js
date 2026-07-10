// template.marko
const $doubled__OR__tripled = ($scope) => {
	_text($scope.b, ("c" in $scope ? $scope.c : 1) * 2 * (("c" in $scope ? $scope.c : 1) * 3) + ("c" in $scope ? $scope.c : 1) * 2);
};
const $count = /*@__PURE__*/ _let(2, $doubled__OR__tripled);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, ("c" in $scope ? $scope.c : 1) + 1);
}));
