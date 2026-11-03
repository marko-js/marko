// tags/child.marko
const $input2 = ($scope) => _text($scope.a, JSON.stringify($scope.d));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.d);
}));
const $input = /*@__PURE__*/ _const(3, ($scope) => $input2($scope, $scope.d));

// template.marko
const $a = /*@__PURE__*/ _let(2, ($scope) => $input($scope.b, { a: $scope.c }));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, "bye");
}));
