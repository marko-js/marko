// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen__OR__hidden = /*@__PURE__*/ _or(6, ($scope) => $Panel_content__if($scope, $scope.d && !$scope.f ? 0 : 1));
const $Panel_content__isOpen = /*@__PURE__*/ _const(3, $Panel_content__isOpen__OR__hidden);
const $Panel_content__hidden = /*@__PURE__*/ _const(5, $Panel_content__isOpen__OR__hidden);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
	$Panel_content__hidden($scope, $temp.hidden);
};
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_open = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.g)));
const $if_content__input_label = /*@__PURE__*/ _shell_init("a10", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.h)));
const $if_content__init = _shell_setup("a11", ($scope) => $Panel_content__hidden($scope.a));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__input_hidden__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 13, /*@__PURE__*/ _fill_join("a5", 9, /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.n, ($_) => ({
	isOpen: !$scope.k,
	label: $scope.h + "!",
	hidden: $scope.j
})), 3)));
const $open = /*@__PURE__*/ _fill_let("a7", 10, $input_label__OR__input_hidden__OR__open__OR__Tag);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.k);
}));
const $input_label = fill("a4", /*@__PURE__*/ _const(7, ($scope) => {
	$input_label__OR__input_hidden__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}));
const $input_open = fill("a3", /*@__PURE__*/ _const(6, $if_content__input_open));
