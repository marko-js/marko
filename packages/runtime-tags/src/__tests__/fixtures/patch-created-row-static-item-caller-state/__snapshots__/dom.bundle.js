// tags/rows.marko
const $for_content__input_label__OR__x = /*@__PURE__*/ _or_patch("b0", 3, ($scope) => _text($scope.a, $scope._.d + $scope.c));
const $for_content__input_label = /*@__PURE__*/ _for_closure(0, $for_content__input_label__OR__x, 4);
const $input_label = /*@__PURE__*/ _const(3, $for_content__input_label);

// template.marko
const $if_content__l = /*@__PURE__*/ _if_closure_patch("a3", 0, 0, ($scope) => $input_label($scope.a, $scope._.f));
const $l = _let(5, $if_content__l);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$l($scope, $scope.f + "!");
}));
