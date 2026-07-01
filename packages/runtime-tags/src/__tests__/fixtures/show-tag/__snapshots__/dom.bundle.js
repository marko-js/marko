// template.marko
const $show2 = /* @__PURE__ */ _show(2, 1);
const $show__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$show2($scope, $scope.d);
	$show__script($scope);
});
