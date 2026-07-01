// template.marko
const $show = /* @__PURE__ */ _show(3, 1);
const $reveal__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$reveal($scope, !$scope.h);
}));
const $reveal = /* @__PURE__ */ _let(7, ($scope) => {
	$show($scope, $scope.h);
	$reveal__script($scope);
});
