// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $for_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]?.label);
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed(0, "<em> </em>", "D ", 0, $for_content__$params);
const $if_content2__first_item = /*@__PURE__*/ _if_closure_patch("a8", 0, 0, ($scope) => $if_content2__for($scope, [$scope._.e]));
const $if_content2__setup = $if_content2__first_item;
const $Panel_content__first = ($scope, first) => {
	$Panel_content__if($scope, first?.isOpen ? 0 : 1);
	$Panel_content__first_item($scope, first?.item);
};
const $Panel_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__setup);
const $Panel_content__first_item = /*@__PURE__*/ _const(4, $if_content2__first_item);
const $Panel_content__all = ($scope, all) => $Panel_content__first($scope, all.at(0));
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__all);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _or_patch("a6", 12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	item: attrTag({ label: $scope.h + "!" })
})), 2);
const $open = _let(8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
