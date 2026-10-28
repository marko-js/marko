// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join("a5", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__label__script = _script("a4", ($scope) => console.log("effect", $scope.e));
const $Panel_content__label = /*@__PURE__*/ _fill_const("a5", 4, ($scope) => {
	$if_content2__label($scope);
	$Panel_content__label__script($scope);
}, /*@__PURE__*/ _fill_mark(4, $if_content2__label));
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a11", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: "dyn"
}))));
const $open = _let(9, $open__OR__Tag);
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
