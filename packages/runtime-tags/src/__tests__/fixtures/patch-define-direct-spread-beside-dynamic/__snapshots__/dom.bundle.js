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
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a5", 13, /*@__PURE__*/ _fill_join("a4", 9, /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.n, ($_) => ({
	isOpen: !$scope.k,
	label: $scope.j + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a6", 10, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.k);
}));
const $input_show__OR__input_rest = /*@__PURE__*/ _or(7, ($scope) => {
	const $tag_input_spread = {
		isOpen: $scope.f,
		...$scope.g
	};
	$Panel_content__isOpen($scope.a, $tag_input_spread.isOpen);
	$Panel_content__tag_input_label($scope.a, $tag_input_spread.label);
});
const $input_show = fill("a2", /*@__PURE__*/ _const(5, $input_show__OR__input_rest));
const $input_rest = fill("a3", /*@__PURE__*/ _const(6, $input_show__OR__input_rest));
