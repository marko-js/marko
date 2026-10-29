// tags/outer.marko
const $objT_content__input_label = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.e), 0, "b1");
const $objT_content = _content("b0", " ", " ", $objT_content__input_label);
_content_resume($objT_content);
const $obj = ($scope, obj) => $obj_T($scope, obj.T);
const $T = fill("b3", /*@__PURE__*/ _let(5, ($scope) => $obj($scope, { T: $scope.f })));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $objT_content);
const $input_label__OR__obj_T = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.h, ($_) => ({ title: $scope.e })));
const $obj_T = /*@__PURE__*/ _const(7, $input_label__OR__obj_T);
const $input_label__closure = /*@__PURE__*/ _closure($objT_content__input_label);
const $input_label = fill("b2", /*@__PURE__*/ _const(4, ($scope) => {
	$input_label__OR__obj_T($scope);
	$input_label__closure($scope);
}));
