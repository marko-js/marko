// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if_content2__setup = ($scope) => {
	$if_content2__label._($scope);
	$if_content2__n._($scope);
};
const $if_content2__n = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f));
const $Panel_content__n = /*@__PURE__*/ _let(5);
const $Panel_content__setup = ($scope) => $Panel_content__n($scope, 1);
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em><!> <!></em>", "D%c%", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $if_content__input_show = /*@__PURE__*/ _shell_init("a8", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_label._($scope);
	$if_content__init($scope);
};
const $if_content__input_label = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g)));
const $if_content__init = _resumed.a10 = ($scope) => $Panel_content__setup($scope.a);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a5", 11, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.g + "!"
})), 2));
const $open = /*@__PURE__*/ _fill_let("a6", 8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = fill("a3", /*@__PURE__*/ _const(5, ($scope) => {
	$if_content__input_show($scope);
	$if($scope, $scope.f ? 0 : 1);
}), 5, $if_content__input_show);
const $input_label = fill("a4", /*@__PURE__*/ _const(6, ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}));
