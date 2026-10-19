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
const $if_content__x = fill("a2", /*@__PURE__*/ _const(3, ($scope) => $Panel_content__tag_input_label($scope.a, $scope.d)));
const $if_content__n = /*@__PURE__*/ _fill_let("a5", 4, ($scope) => $Panel_content__tag_input_label($scope.b, $scope.e));
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$if_content__n($scope, +$scope.e + 1);
}));
const $if_content__input_open = /*@__PURE__*/ _shell_init("a12", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.h)));
const $if_content__init = _resumed.a13 = ($scope) => $Panel_content__isOpen($scope.b, true);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a9", 12, /*@__PURE__*/ _fill_join("a7", 6, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	label: $scope.g + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a10", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_open = fill("a8", /*@__PURE__*/ _const(7, $if_content__input_open));
