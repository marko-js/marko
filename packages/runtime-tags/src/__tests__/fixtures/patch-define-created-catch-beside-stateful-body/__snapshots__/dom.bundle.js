// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content__label = /*@__PURE__*/ _fill_join("a4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("a4", 4, $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $catch_content__input_label = /*@__PURE__*/ _fill_join_closure("a9", 5, /*@__PURE__*/ _closure_get(13, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.f), 0, "a5"), 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$Panel_content__isOpen($scope.a, true);
};
const $catch_content = _content$1("a7", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $catch_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a10", 11, /*@__PURE__*/ _fill_join("a9", 5, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.f + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a11", 8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
