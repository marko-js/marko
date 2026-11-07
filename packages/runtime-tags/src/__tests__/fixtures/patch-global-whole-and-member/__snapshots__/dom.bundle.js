// template.marko
const $n = _let(4, ($scope) => _text($scope.d, $scope.e));
const $global2__script = _script("a3", ($scope) => {
	$scope.$;
	$scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1);
});
const $global2 = _fill_global("a0", $global2__script, "");
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
