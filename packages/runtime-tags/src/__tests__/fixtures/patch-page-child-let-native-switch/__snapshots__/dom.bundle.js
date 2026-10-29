// tags/outer.marko
const $T_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.e), 0, "b1");
const $T_content = _content("b0", " ", " ", $T_content__input_label);
_content_resume($T_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $T_content);
const $input_label__OR__T = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({ title: $scope.e })));
const $T = fill("b3", /*@__PURE__*/ _let(5, $input_label__OR__T));
const $input_label__closure = /*@__PURE__*/ _closure($T_content__input_label);
const $input_label = fill("b2", /*@__PURE__*/ _const(4, ($scope) => {
	$input_label__OR__T($scope);
	$input_label__closure($scope);
}));
