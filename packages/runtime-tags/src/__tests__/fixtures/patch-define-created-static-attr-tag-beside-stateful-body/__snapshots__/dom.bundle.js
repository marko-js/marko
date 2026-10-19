// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__item_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__item_label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_item_label = /*@__PURE__*/ _const(5, $if_content2__item_label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__item($scope, $temp.item);
};
const $Panel_content__item = ($scope, item) => $Panel_content__tag_input_item_label($scope, item?.label);
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_open = /*@__PURE__*/ _shell_init("a8", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.g)));
const $if_content__init = _resumed.a9 = ($scope) => $Panel_content__tag_input_item_label($scope.a, "x");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a5", 12, /*@__PURE__*/ _fill_join("a4", 8, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	item: attrTag({ label: $scope.i + "!" })
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a6", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_open = fill("a3", /*@__PURE__*/ _const(6, $if_content__input_open));
