// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if_content2__setup = $if_content2__label;
const $Panel_content__label = /*@__PURE__*/ _fill_const("a3", 4, $if_content2__label);
const $Panel_content__input_label = /*@__PURE__*/ _shell_init("a11", /*@__PURE__*/ _fill_join_closure("a6", 5, /*@__PURE__*/ _closure_get(14, ($scope) => $Panel_content__label($scope, $scope._.f + "?"), 0, "a4"), 0));
const $Panel_content__setup = $Panel_content__input_label;
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__isOpen($scope, $temp.isOpen);
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__Tag = /*@__PURE__*/ _fill_join("a8", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({ isOpen: !$scope.j }))));
const $open = /*@__PURE__*/ _fill_let("a9", 9, $open__OR__Tag);
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
