// template.marko
const $show = /* @__PURE__ */ _show(4, 1);
const $visible__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$visible($scope, !$scope.f);
}));
const $visible = /* @__PURE__ */ _let(5, ($scope) => {
	$show($scope, $scope.f);
	$visible__script($scope);
});
const $count__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$count__script($scope);
});
