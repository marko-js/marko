// template.marko
const $body_content__setup = _script("a0", ($scope) => console.log("body setup"));
const $n = _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
