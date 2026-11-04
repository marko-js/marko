// tags/card.marko
const $f = _let(5, ($scope) => _text($scope.b, $scope.f()));
const $input_fn = $f;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));

// tags/inner.marko
const $await_content__input_label__OR__v = /*@__PURE__*/ _or_patch("c1", 3, ($scope) => $input_fn($scope.a, function() {
	return $scope.c + ":" + $scope._._.e;
}));
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("c0", 5, $await_content__input_label__OR__v, ($scope) => $scope._._, "c5", 0);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const(4, $input_label__closure);

// template.marko
const $label = _let(5, ($scope) => $input_label($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, $scope.f + "!");
}));
