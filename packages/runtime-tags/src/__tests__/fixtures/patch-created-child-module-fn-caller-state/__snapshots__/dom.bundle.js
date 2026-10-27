// tags/rowsx.marko
const $if_content__fmt__OR__label = /*@__PURE__*/ _fill_join_if("b4", 5, /*@__PURE__*/ _fill_join_if("b3", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f))), 0, 0), 0, 0);
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, $if_content__fmt__OR__label);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content__label);
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope.a, input_label + "1");

// template.marko
const $if_content__l = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.g)));
const $l = /*@__PURE__*/ _let(6, $if_content__l);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$l($scope, $scope.g + "!");
}));
