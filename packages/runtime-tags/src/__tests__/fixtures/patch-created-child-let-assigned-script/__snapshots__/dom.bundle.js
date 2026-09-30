// tags/probe.marko
const $count__OR__doubled__script = _script("b1", ($scope) => document.body.dataset.count = String($scope.b + 1) + "/" + $scope.b * 2);
const $count = /*@__PURE__*/ _fill_let("b2", 1, /* @__PURE__ */ _fill_join("b2", 1, $count__OR__doubled__script));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.b + 1);
}));
