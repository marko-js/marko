// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _fill_join("a5", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("a5", 4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a4", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $await_content__input_label = _closure_resume("a6", /*@__PURE__*/ _fill_join_closure("a9", 7, /*@__PURE__*/ _closure_get(15, ($scope) => $Panel_content__tag_input_label($scope.b, $scope._._.h), ($scope) => $scope._._), 0));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a10", 12, /*@__PURE__*/ _fill_join("a9", 7, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: $scope.h + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a11", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a7", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
