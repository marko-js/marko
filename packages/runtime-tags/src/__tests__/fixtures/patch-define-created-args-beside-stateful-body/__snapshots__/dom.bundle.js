// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _fill_join("a3", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_param_ = /*@__PURE__*/ _fill_const("a3", 3, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => {
	$Panel_content__isOpen($scope, $params2[0]);
	$Panel_content__tag_param_($scope, $params2[1]);
};
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, 0, 0, 1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a8", 12, /*@__PURE__*/ _fill_join("a7", 8, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => [!$scope.j, $scope.i + "!"]), 2)));
const $open = /*@__PURE__*/ _let(9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
