// template.marko
const $show2 = /* @__PURE__ */ _show(5, 2);
const $outer = /* @__PURE__ */ _let(6, ($scope) => $show2($scope, $scope.g));
const $show = /* @__PURE__ */ _show(4, 3);
const $inner = /* @__PURE__ */ _let(7, ($scope) => $show($scope, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.g);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.h);
	});
});
