// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $for_content__it_label = ($scope, it_label) => _text($scope.a, it_label);
const $for_content__$params = ($scope, $params3) => $for_content__it_label($scope, $params3[0]?.label);
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed(0, "<em> </em>", "D ", 0, $for_content__$params);
const $if_content2__item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content2__for($scope, [$scope._.e]));
const $if_content2__setup = $if_content2__item;
const $if_content__setup = _shell_setup("a7", ($scope) => {
	let $item;
	$item = attrTag({ label: "x" });
	$Panel_content__tag_input_item($scope.a, $item);
	$Panel_content__isOpen($scope.a, true);
});
const $Panel_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_item = /*@__PURE__*/ _const(4, $if_content2__item);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_item($scope, $temp.item);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a4", 11, /*@__PURE__*/ _fill_join("a3", 7, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	item: attrTag({ label: $scope.h + "!" })
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a5", 8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
