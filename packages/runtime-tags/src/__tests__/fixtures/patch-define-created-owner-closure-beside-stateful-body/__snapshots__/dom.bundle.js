// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__input_label = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__tag_input_label($scope.a, $scope._.f);
	$Panel_content__tag_input_label($scope.b, $scope._.f);
}));
const $if_content2__input_open = /*@__PURE__*/ _shell_init("a10", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.h)));
const $if_content2__init = _resumed.a11 = ($scope) => $scope.a._ = $scope._;
const $if_content2__init2 = _resumed.a12 = ($scope) => {
	$scope.b._ = $scope._;
	$Panel_content__isOpen($scope.b, true);
};
const $if_content__input_label = /*@__PURE__*/ _closure_get(14, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "a1");
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: $scope.f + "!"
})), 2));
const $open = /*@__PURE__*/ _fill_let("a7", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = fill("a4", /*@__PURE__*/ _const(5, ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$input_label__closure($scope);
	$if_content2__input_label($scope);
}));
const $input_open = fill("a5", /*@__PURE__*/ _const(7, $if_content2__input_open));
