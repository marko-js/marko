// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.e));
const $Panel_content2__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__content);
const $Panel_content2__isOpen = ($scope, isOpen) => $Panel_content2__if($scope, isOpen ? 0 : 1);
const $Panel_content2__tag_input_content = /*@__PURE__*/ _const(4, $if_content2__content);
const $Panel_content2__$params = ($scope, $params2) => $Panel_content2__$temp($scope, $params2[0]);
const $Panel_content2__$temp = ($scope, $temp) => {
	$Panel_content2__isOpen($scope, $temp.isOpen);
	$Panel_content2__tag_input_content($scope, $temp.content);
};
const $Panel_content2 = _content$1("a1", $Panel_content2__template, $Panel_content2__walks, 0, $Panel_content2__$params);
const $Tag_content__input_label = /*@__PURE__*/ _fill_join_closure("a8", 7, /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.a, $scope._.h), 0, "a5"), 1);
const $Tag_content = _content$1("a4", "<b><!>!</b>", "D%", $Tag_content__input_label);
_content_resume($Tag_content);
const $Panel_content__input_label = /*@__PURE__*/ _fill_join_closure("a8", 7, /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.a, $scope._._.h), ($scope) => $scope._._, "a2"), 0);
const $Panel_content = _content$1("a3", "<em> </em>", "D ", $Panel_content__input_label);
const $if_content__input_open = /*@__PURE__*/ _shell_init("a12", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content2__isOpen($scope.a, $scope._.g)));
const $if_content__init = _shell_setup("a13", ($scope) => $Panel_content2__tag_input_content($scope.a, $Panel_content($scope)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, $Tag_content);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a9", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({ isOpen: !$scope.j }))));
const $open = /*@__PURE__*/ _fill_let("a10", 9, $open__OR__Tag);
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_open = fill("a7", /*@__PURE__*/ _const(6, $if_content__input_open));
