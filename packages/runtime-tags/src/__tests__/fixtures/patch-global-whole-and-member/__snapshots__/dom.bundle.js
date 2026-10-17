// template.marko
const $n = /*@__PURE__*/ _fill_let("a3", 4, ($scope) => _text($scope.d, $scope.e));
const $setup__$global = _fill_global_script("a0", ($scope) => {
	$scope.$;
	$scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1);
}, "");
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
