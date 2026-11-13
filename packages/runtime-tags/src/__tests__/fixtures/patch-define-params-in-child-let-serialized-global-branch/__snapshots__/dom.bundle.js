// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({ n: 2 })));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $if_content__n = /*@__PURE__*/ _if_closure_patch("a4", 0, 0, ($scope) => _text($scope.b, $scope._.d));
const $if_content__setup__$global_label = /*@__PURE__*/ _fill_global("a0", ($scope) => _text($scope.a, $scope.$.label), "label");
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$if_content__setup__$global_label($scope);
};
const $Row_content__if = /*@__PURE__*/ _if(0, "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Row_content__n = /*@__PURE__*/ _const(3, ($scope) => {
	$Row_content__if($scope, $scope.d ? 0 : 1);
	$if_content__n($scope);
});
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content$1("a2", $Row_content__template, $Row_content__walks, 0, $Row_content__$params);
