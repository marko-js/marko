// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $for_content__it_label = ($scope, it_label) => _text($scope.a, it_label);
const $for_content__$params = ($scope, $params3) => $for_content__it_label($scope, $params3[0]?.label);
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed(0, "<em> </em>", "D ", 0, $for_content__$params);
const $if_content2__item = /*@__PURE__*/ _fill_join("a4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content2__for($scope, [$scope._.e])));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__item);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_item = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__item);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_item($scope, $temp.item);
};
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a9", 12, /*@__PURE__*/ _fill_join("a8", 8, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	item: attrTag({ label: $scope.i + "!" })
})), 2)));
const $open = _let(9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
