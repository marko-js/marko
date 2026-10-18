// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__label__script = _script("a2", ($scope) => console.log("effect", $scope.e));
const $Panel_content__label = /*@__PURE__*/ _const(4, ($scope) => {
	$if_content2__label($scope);
	$Panel_content__label__script($scope);
});
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_open = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.g)));
const $if_content__input_label = /*@__PURE__*/ _shell_init("a10", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__label($scope.b, $scope._.h)));
const $if_content__init = _shell_setup("a11", ($scope) => $Panel_content__label($scope.a, "k"));
const $if_content__init2 = _shell_setup("a12", ($scope) => $Panel_content__isOpen($scope.b, true));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: "dyn"
}))));
const $open = /*@__PURE__*/ _fill_let("a7", 9, $open__OR__Tag);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_open = fill("a4", /*@__PURE__*/ _const(6, $if_content__input_open));
const $input_label = fill("a5", /*@__PURE__*/ _const(7, $if_content__input_label));
