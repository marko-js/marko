// tags/card.marko
const $f = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => _text($scope.b, $scope.f()));
const $input_fn = $f;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));

// template.marko
const $await_content__input_label__OR__v = /*@__PURE__*/ _fill_join_subscribers("a5", 4, /*@__PURE__*/ _or(3, ($scope) => $input_fn($scope.a, $fn($scope))), 5, 0);
const $await_content__input_label = _closure_resume("a4", /*@__PURE__*/ _closure_get(5, $await_content__input_label__OR__v, ($scope) => $scope._._));
const $fn = ($scope) => function() {
	return $scope.c + ":" + $scope._._.e;
};
_resumed.a0 = $fn;
