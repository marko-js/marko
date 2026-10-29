// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content__label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a4", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $Wrap_content__input_label = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _fill_join_closure("a10", 6, /*@__PURE__*/ _closure_get(13, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g), 0, "a8"), 0));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__input_label($scope);
	$Panel_content__isOpen($scope.a, true);
};
const $Wrap_content = _content$1("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $Wrap_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a11", 11, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: "y"
}))));
const $open = _let(8, $open__OR__Tag);
const $setup__script = _script("a9", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
