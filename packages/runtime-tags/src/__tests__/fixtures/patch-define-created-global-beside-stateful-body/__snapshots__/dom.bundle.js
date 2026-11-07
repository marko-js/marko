// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
const $if_content2__label = /*@__PURE__*/ _if_closure_patch("a3", 0, 0, ($scope) => _text($scope.a, $scope._.f));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen__OR__label = /*@__PURE__*/ _or_patch("a4", 6, ($scope) => _text($scope.b, $scope.e ? $scope.f : "-"));
const $Panel_content__isOpen = /*@__PURE__*/ _const(4, ($scope) => {
	$Panel_content__if($scope, $scope.e ? 0 : 1);
	$Panel_content__isOpen__OR__label($scope);
});
const $Panel_content__label = /*@__PURE__*/ _const(5, ($scope) => {
	$Panel_content__isOpen__OR__label($scope);
	$if_content2__label($scope);
});
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a11", 0, 0, ($scope) => {
	$Panel_content__label($scope.a, $scope.$.brand);
	$Panel_content__label($scope.b, $scope.$.brand);
	_text($scope.c, $scope.$.brand);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _or_patch("a9", 12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.h + "!"
})), 2);
const $open = _let(8, $input_label__OR__open__OR__Tag);
const $global_brand = _fill_global("a6", $if_content__$global_brand, "brand");
const $setup__script = _script("a7", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
