// tags/counter.marko
const $n = /*@__PURE__*/ _fill_let("b1", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));

// template.marko
const $catch_content = _content$1("a6", "caught");
