// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content3__ret = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if_content3__setup = $if_content3__ret;
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen__OR__label = /*@__PURE__*/ _or(5, ($scope) => _return($scope, $scope.e + ($scope.d ? "Y" : "N")));
const $Panel_content__isOpen = /*@__PURE__*/ _const(3, ($scope) => {
	$Panel_content__if($scope, $scope.d ? 0 : 1);
	$Panel_content__isOpen__OR__label($scope);
});
const $Panel_content__label = /*@__PURE__*/ _const(4, ($scope) => {
	$Panel_content__isOpen__OR__label($scope);
	$if_content2__label($scope);
});
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_label = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__label($scope.a, $scope._.g)));
const $if_content__if = /*@__PURE__*/ _if(3, "<span> </span>", "D ", $if_content3__setup);
const $if_content__open = /*@__PURE__*/ _shell_init("a10", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.i ? 0 : 1)));
const $if_content__init = _resumed.a11 = ($scope) => $Panel_content__isOpen($scope.a, true);
const $if_content__ret = _var_resume("a2", /*@__PURE__*/ _fill_const("a3", 4, ($scope) => {
	$if_content3__ret($scope);
	_text($scope.c, $scope.e);
}, $if_content3__ret));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 11, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.g + "!"
})), 2));
const $open = /*@__PURE__*/ _fill_let("a7", 8, ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__open($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_label = fill("a5", /*@__PURE__*/ _const(6, ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}));
