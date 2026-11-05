// template.marko
const $if = /*@__PURE__*/ _if(2, "zero");
const $show = /*@__PURE__*/ _show(1);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d === 0 ? 0 : 1);
	$show($scope, $scope.d !== 2);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, ($scope.d + 1) % 3);
}));
