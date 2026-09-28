// template.marko
const $if_content__setup = _script("a0", ($scope) => $scope._.a.textContent = "Hit");
const $if = /*@__PURE__*/ _if(3, 0, 0, $if_content__setup);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$if($scope, !$scope.e ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.e + 1);
}));
