// tags/card.marko
const $g = ($scope, g) => _text($scope.b, g());
const $input_fn__OR__open = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _or(6, ($scope) => $g($scope, $scope.f ? $scope.e : () => "-")));
const $open = /*@__PURE__*/ _fill_let("b2", 5, $input_fn__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
const $input_fn = /*@__PURE__*/ _fill_const("b1", 4, $input_fn__OR__open);

// template.marko
const $for_content__input_label = /*@__PURE__*/ _for_closure(0, ($scope) => $input_fn($scope.a, $fn($scope)));
const $input_label = fill("a2", /*@__PURE__*/ _const(4, $for_content__input_label));
const $fn = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $fn;
