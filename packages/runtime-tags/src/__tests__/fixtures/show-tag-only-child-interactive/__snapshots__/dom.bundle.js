// template.marko
const $show = /* @__PURE__ */ _show(1);
const $open = /* @__PURE__ */ _let(4, ($scope) => $show($scope, $scope.e));
const $n = /* @__PURE__ */ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$open($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$n($scope, $scope.f + 1);
	});
});
