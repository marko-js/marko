// tags/child.marko
const $input_a = ($scope) => _text($scope.a, $scope.e);
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.e);
}));
const $a$1 = /*@__PURE__*/ _const(4, ($scope) => $input_a($scope, $scope.e));

// template.marko
const $a = /*@__PURE__*/ _let(2, ($scope) => $a$1($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, "bye");
}));
