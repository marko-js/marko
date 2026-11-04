// template.marko
const $if = /*@__PURE__*/ _if(3, "more", 0, 0, "none");
const $n = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.c, $scope.f);
	$if($scope, $scope.f > 0 ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	$n($scope, +$scope.f + 1);
}));
