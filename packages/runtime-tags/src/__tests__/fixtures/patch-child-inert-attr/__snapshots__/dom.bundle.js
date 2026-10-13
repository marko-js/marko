// helper.ts
function stamp() {
	return "stamp";
}

// tags/dump/index.marko
const $input = ($scope, input) => _text($scope.a, JSON.stringify(input));

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => $input($scope.a, {
	value: $scope.c,
	stamp: stamp()
}));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
