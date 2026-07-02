// template.marko
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.a, $scope.h);
	_text($scope.b, $scope.h);
	_text($scope.d, $scope.h);
	_text($scope.f, $scope.h);
});
const $show = /* @__PURE__ */ _show(4, 2);
const $vis = /* @__PURE__ */ _let(8, ($scope) => $show($scope, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.g, "click", function() {
	$count($scope, $scope.h + 5);
	$vis($scope, !$scope.i);
}));
