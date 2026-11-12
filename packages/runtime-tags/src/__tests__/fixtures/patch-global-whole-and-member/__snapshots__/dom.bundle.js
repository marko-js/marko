// template.marko
const $n = _let(4, ($scope) => _text($scope.d, $scope.e));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
const $global2__script = _global_script("a2", ($scope) => {
	$scope.$;
	$scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1);
}, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key()));
