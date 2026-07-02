// template.marko
const $show = /* @__PURE__ */ _show(4, 1);
const $visible = /* @__PURE__ */ _let(5, ($scope) => $show($scope, $scope.f));
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.d, $scope.g));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.f);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.g + 1);
	});
});
