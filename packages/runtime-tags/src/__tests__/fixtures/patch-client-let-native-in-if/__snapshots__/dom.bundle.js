// tags/outer.marko
const $T_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b1");
const $T_content = _content$1("b0", " ", " ", $T_content__input_label);
_content_resume($T_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $T_content);
const $if_content__input_label__OR__T = /*@__PURE__*/ _or_resume("b6", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.g, ($_) => ({ title: $scope._.f })));
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__T);
const $if_content__T = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__T);
const $T = fill("b4", /*@__PURE__*/ _let(6, $if_content__T));
const $input_label__closure = /*@__PURE__*/ _closure($T_content__input_label);
const $input_label = fill("b3", /*@__PURE__*/ _const(5, ($scope) => {
	$if_content__input_label($scope);
	$input_label__closure($scope);
}));
