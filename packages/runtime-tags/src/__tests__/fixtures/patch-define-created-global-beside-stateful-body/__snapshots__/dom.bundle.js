// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen__OR__label = /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.e ? $scope.f : "-"));
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
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_show = /*@__PURE__*/ _shell_init("a11", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__isOpen($scope.a, $scope._.f)));
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "a4", ($scope) => _text($scope.c, $scope.$.brand));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__init($scope);
	$if_content__init2($scope);
	$if_content__setup__$global_brand($scope);
};
const $if_content__childScope__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "a2", ($scope) => $Panel_content__label($scope.a, $scope.$.brand));
const $if_content__init = _shell_setup("a12", ($scope) => $if_content__childScope__$global_brand($scope));
const $if_content__childScope__$global_brand2 = /*@__PURE__*/ _fill_global_join("brand", "a3", ($scope) => $Panel_content__label($scope.b, $scope.$.brand));
const $if_content__init2 = _shell_setup("a13", ($scope) => {
	$Panel_content__isOpen($scope.b, true);
	$if_content__childScope__$global_brand2($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a8", 11, /*@__PURE__*/ _fill_join("a7", 7, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.h + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a9", 8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<span> </span>`)($Panel_content__template, $Panel_content__template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Panel_content__walks, $Panel_content__walks), $if_content__setup);
const $input_show = fill("a6", /*@__PURE__*/ _const(5, ($scope) => {
	$if_content__input_show($scope);
	$if($scope, $scope.f ? 0 : 1);
}), 5, $if_content__input_show);
