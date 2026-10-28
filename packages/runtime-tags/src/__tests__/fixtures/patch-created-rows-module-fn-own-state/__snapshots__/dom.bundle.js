// tags/rowsx.marko
const $if_content__fmt__OR__label = /*@__PURE__*/ _fill_if("b5", 5, /*@__PURE__*/ _fill_if("b4", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f))), 0, 0), 0, 0);
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, $if_content__fmt__OR__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("b5", 5, $if_content__label);
const $for_content__suffix__OR__x = /*@__PURE__*/ _fill("b6", 2, /*@__PURE__*/ _or(3, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g + $scope.c)));
const $for_content__suffix = /*@__PURE__*/ _init_resume("b13", /*@__PURE__*/ _for_closure(0, $for_content__suffix__OR__x));
const $suffix = /*@__PURE__*/ _fill_let("b10", 6, $for_content__suffix);
const $setup__script = _script("b8", ($scope) => _on($scope.b, "click", function() {
	$suffix($scope, $scope.g + "!");
}));
