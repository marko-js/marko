// template.marko
const $input_greeting__OR__count = /*@__PURE__*/ _or(5, _script("a0", ($scope) => document.getElementById("out").textContent = `${$scope.d} ${$scope.e}`));
const $count = /*@__PURE__*/ _let(4, $input_greeting__OR__count);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
