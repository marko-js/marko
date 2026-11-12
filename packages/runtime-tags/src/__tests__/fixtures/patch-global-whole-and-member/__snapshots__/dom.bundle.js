// template.marko
const $n = _let(4, ($scope) => _text($scope.d, $scope.e));
const $global_key = /*@__PURE__*/ _global_key(5);
const $global2__script = _script("a2", ($scope) => {
	$global2.r($scope);
	$scope.$;
	$scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1);
});
const $global2 = /*@__PURE__*/ _global_closure("a4", $global_key, $global2__script);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
