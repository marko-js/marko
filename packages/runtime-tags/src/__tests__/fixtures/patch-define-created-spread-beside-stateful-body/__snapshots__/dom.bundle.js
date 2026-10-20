// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("a3", 4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _or(3, ($scope) => {
	const $tag_input_spread = {
		...$scope._.g,
		...$scope._.h
	};
	$Panel_content__isOpen($scope.a, $tag_input_spread.isOpen);
	$Panel_content__tag_input_label($scope.a, $tag_input_spread.label);
});
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	const $tag_input_spread2 = {
		isOpen: true,
		...$scope._.h
	};
	$Panel_content__isOpen($scope.b, $tag_input_spread2.isOpen);
	$Panel_content__tag_input_label($scope.b, $tag_input_spread2.label);
	$if_content__input_a__OR__input_b($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a8", 13, /*@__PURE__*/ _fill_join("a7", 9, /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.n, ($_) => ({
	isOpen: !$scope.k,
	label: $scope.j + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a9", 10, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.k);
}));
fill("a5", /*@__PURE__*/ _const(6, ($scope) => {}));
const $input_b = fill("a6", /*@__PURE__*/ _const(7, $if_content__input_b));
