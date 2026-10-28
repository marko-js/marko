// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $if_content2__setup = ($scope) => {
	$if_content2__label._($scope);
	$if_content2__extra._($scope);
};
const $if_content2__extra = /*@__PURE__*/ _fill_signal("5 a5", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em><!><!></em>", "D%b%", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => {
	$Panel_content__$temp($scope, $params2[0]);
	$Panel_content__extra($scope, $params2[1]);
};
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content__extra = /*@__PURE__*/ _fill_const("a5", 5, $if_content2__extra);
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_signal("7 a10 a11,12 a12", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: $scope.h + "!"
})), 2));
const $open = /*@__PURE__*/ _let(9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
