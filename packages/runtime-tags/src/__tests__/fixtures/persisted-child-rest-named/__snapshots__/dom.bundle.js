// tags/card/index.marko
const $rest = ($scope, rest) => _text($scope.b, JSON.stringify(rest));

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $rest($scope.a, { value: $scope.f }));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
