// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $if_content2__setup = $if_content2__label;
const $Inner_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__setup);
const $Inner_content__isOpen = ($scope, isOpen) => $Inner_content__if($scope, isOpen ? 0 : 1);
const $Inner_content__tag_input_label = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__label);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__isOpen($scope, $temp.isOpen);
	$Inner_content__tag_input_label($scope, $temp.label);
};
const $Inner_content = _content$1("a3", $Inner_content__template, $Inner_content__walks, 0, $Inner_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_signal("6 a11,12 a12", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: $scope.g + "!"
})), 2));
const $open = /*@__PURE__*/ _let(9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a10", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
