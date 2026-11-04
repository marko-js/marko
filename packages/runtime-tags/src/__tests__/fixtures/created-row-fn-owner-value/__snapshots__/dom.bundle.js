// tags/card.marko
const $input_fn__OR__open = /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, ($scope.f ? $scope.e : () => "-")()));
const $open = /*@__PURE__*/ _let(5, $input_fn__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $fn;
