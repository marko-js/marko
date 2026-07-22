// template.marko
const $if = /*@__PURE__*/ _if(3, 0, 0, _script("a0", ($scope) => $scope._.a.textContent = "Hit"));
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$count__render($scope);
	$if($scope, !$scope.e ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.e + 1);
}));
