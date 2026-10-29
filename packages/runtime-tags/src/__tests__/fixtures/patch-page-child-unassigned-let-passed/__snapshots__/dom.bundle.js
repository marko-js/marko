// tags/card.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/outer.marko
const $v = fill("c1", /*@__PURE__*/ _let(5, ($scope) => $input_value($scope.a, $scope.f)));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.f);
}));
