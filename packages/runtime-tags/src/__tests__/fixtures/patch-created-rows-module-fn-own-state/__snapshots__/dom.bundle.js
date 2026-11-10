// tags/rowsx.marko
const $if_content__fmt__OR__label = /*@__PURE__*/ _or_patch("b0", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f)));
const $if_content__label = /*@__PURE__*/ _if_closure_patch("b12", 0, 0, $if_content__fmt__OR__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content__label);
const $for_content__suffix__OR__x = /*@__PURE__*/ _or_patch("b6", 3, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g + $scope.c));
const $for_content__suffix = /*@__PURE__*/ _for_closure_patch("b11", 0, $for_content__suffix__OR__x, 8);
const $suffix = /*@__PURE__*/ _fill_let("b8", 6, $for_content__suffix);
const $setup__script = _script("b7", ($scope) => _on($scope.b, "click", function() {
	$suffix($scope, $scope.g + "!");
}));
