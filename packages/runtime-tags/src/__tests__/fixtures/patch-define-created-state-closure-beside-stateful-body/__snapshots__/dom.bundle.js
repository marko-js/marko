// template.marko
const $Panel_content__walks = "D l%c";
const $Panel_content__template = "<span> </span><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content2__setup = ($scope) => {
	$if_content2__label._($scope);
	$if_content2__n._($scope);
};
const $if_content2__n = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.g));
const $Panel_content__open = /*@__PURE__*/ _closure_get(14, ($scope) => _text($scope.a, $scope._.i ? "o" : "c"), 0, "a2");
const $Panel_content__n = /*@__PURE__*/ _let(6);
const $Panel_content__setup = ($scope) => {
	$Panel_content__open($scope);
	$Panel_content__n($scope, 1);
};
const $Panel_content__if = /*@__PURE__*/ _if(1, "<em><!><!></em>", "D%b%", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $if_content__input_label = /*@__PURE__*/ _shell_init("a8", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g)));
const $if_content__init = _resumed.a9 = ($scope) => {
	$scope.a._ = $scope._;
	$Panel_content__setup($scope.a);
	$Panel_content__isOpen($scope.a, true);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a5", 11, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: "y"
}))));
const $open__closure = /*@__PURE__*/ _closure($Panel_content__open);
const $open = /*@__PURE__*/ _fill_let("a6", 8, ($scope) => {
	$open__OR__Tag($scope);
	$open__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_label = fill("a4", /*@__PURE__*/ _const(6, $if_content__input_label));
