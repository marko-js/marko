// tags/inner.marko
const $if_content__input_label__OR__v = /*@__PURE__*/ _or_patch("b0", 2, ($scope) => _text($scope.a, $scope.b + $scope._.e));
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("b2", 0, 0, $if_content__input_label__OR__v);
const $input_label = /*@__PURE__*/ _const(4, $if_content__input_label);

// template.marko
const $label = _let(5, ($scope) => $input_label($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, $scope.f + "!");
}));
