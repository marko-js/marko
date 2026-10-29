// tags/card.marko
const $g = ($scope, g) => _text($scope.b, g());
const $input_fn__OR__open = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _or(6, ($scope) => $g($scope, $scope.f ? $scope.e : () => "-")));
const $open = /*@__PURE__*/ _fill_let("b2", 5, $input_fn__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope.e;
};
_bind_resume("a0 e", $fn);
