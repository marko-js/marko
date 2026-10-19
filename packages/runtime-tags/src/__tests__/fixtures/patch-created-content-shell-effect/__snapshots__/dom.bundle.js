// template.marko
const $body_content__setup = _script("a2", ($scope) => console.log("body setup"));
const $n = /*@__PURE__*/ _fill_let("a4", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
