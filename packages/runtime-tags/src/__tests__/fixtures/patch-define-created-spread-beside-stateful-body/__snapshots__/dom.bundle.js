// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _or(3, ($scope) => {
	const $tag_input_spread = {
		...$scope._.g,
		...$scope._.h
	};
	$Panel_content__isOpen($scope.a, $tag_input_spread.isOpen);
	$Panel_content__tag_input_label($scope.a, $tag_input_spread.label);
});
const $if_content__input_a = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b));
const $if_content__input_b = /*@__PURE__*/ _shell_init("a10", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	const $tag_input_spread2 = {
		isOpen: true,
		...$scope._.h
	};
	$Panel_content__isOpen($scope.b, $tag_input_spread2.isOpen);
	$Panel_content__tag_input_label($scope.b, $tag_input_spread2.label);
	$if_content__input_a__OR__input_b($scope);
}));
const $if_content__init = _resumed.a11 = ($scope) => {
	const $tag_input_spread3 = {
		isOpen: true,
		label: "x"
	};
	$Panel_content__isOpen($scope.c, $tag_input_spread3.isOpen);
	$Panel_content__tag_input_label($scope.c, $tag_input_spread3.label);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 13, /*@__PURE__*/ _fill_join("a5", 9, /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.n, ($_) => ({
	isOpen: !$scope.k,
	label: $scope.j + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a7", 10, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.k);
}));
const $input_a = fill("a3", /*@__PURE__*/ _const(6, $if_content__input_a));
const $input_b = fill("a4", /*@__PURE__*/ _const(7, $if_content__input_b));
