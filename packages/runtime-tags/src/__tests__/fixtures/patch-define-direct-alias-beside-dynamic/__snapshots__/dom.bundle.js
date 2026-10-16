// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a5", 14, /*@__PURE__*/ _fill_join("a3", 8, /*@__PURE__*/ _or(15, ($scope) => $dynamicTag($scope, $scope.o, () => ({
	isOpen: !$scope.j,
	label: $scope.i + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a7", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $l = fill("a4", /*@__PURE__*/ _const(13, ($scope) => $Panel_content__tag_input_label($scope.a, $scope.n)));
const $input_show = fill("a2", /*@__PURE__*/ _const(6, ($scope) => $Panel_content__isOpen($scope.a, $scope.g)));
