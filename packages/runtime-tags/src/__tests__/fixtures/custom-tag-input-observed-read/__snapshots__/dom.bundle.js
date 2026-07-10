// tags/show-result/index.marko
const $input = ($scope, input) => _text($scope.a, input.get());

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input($scope.b, { get: function() {
	return $scope.c;
} }));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, ("c" in $scope ? $scope.c : 0) + 1);
}));
