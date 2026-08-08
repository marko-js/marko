// template.marko
const $if = /*@__PURE__*/ _if(1, "<div>zero</div>", 0, 0, "<div>one</div>", 0, 0, "<div>two</div>");
const $show = /*@__PURE__*/ _show(3, 2);
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	$if($scope, $scope.e % 3 === 0 ? 0 : $scope.e % 3 === 1 ? 1 : 2);
	$show($scope, $scope.e > 0);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.e + 1);
}));
