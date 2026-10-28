// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__content = /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.e)));
const $Panel_content2__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__content);
const $Panel_content2__isOpen = ($scope, isOpen) => $Panel_content2__if($scope, isOpen ? 0 : 1);
const $Panel_content2__tag_input_content = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__content);
const $Panel_content2__$params = ($scope, $params2) => $Panel_content2__$temp($scope, $params2[0]);
const $Panel_content2__$temp = ($scope, $temp) => {
	$Panel_content2__isOpen($scope, $temp.isOpen);
	$Panel_content2__tag_input_content($scope, $temp.content);
};
const $Panel_content2 = _content$1("a3", $Panel_content2__template, $Panel_content2__walks, 0, $Panel_content2__$params);
const $Tag_content__input_label = /*@__PURE__*/ _fill_closure("a12", 7, /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.a, $scope._.h), 0, "a9"), 1);
const $Tag_content = _content$1("a8", "<b><!>!</b>", "D%", $Tag_content__input_label);
_content_resume($Tag_content);
const $Panel_content__input_label = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _fill_closure("a12", 7, /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.a, $scope._._.h), ($scope) => $scope._._, "a6"), 0));
const $Panel_content = _content$1("a1", "<em> </em>", "D ", $Panel_content__input_label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, $Tag_content);
const $open__OR__Tag = /*@__PURE__*/ _fill_signal("12 a13", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({ isOpen: !$scope.j }))));
const $open = /*@__PURE__*/ _let(9, $open__OR__Tag);
const $setup__script = _script("a10", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
