// tags/gm/index.marko
const $template = "<p></p><!><!>";
const $walks = " b%c";
const $if_content__$global_mark = /*@__PURE__*/ _global_closure("b0", /* @__PURE__ */ _global_key(11, "mark"));
const $if_content__z = /*@__PURE__*/ _if_closure_patch("b4", 1, 0, /* @__PURE__ */ _global_or(1, ($scope) => _attr($scope.a, "data-z", $scope._.g + $scope.$.mark), $if_content__$global_mark));
const $if_content__setup$1 = ($scope) => {
	$if_content__z._($scope);
	$if_content__$global_mark($scope);
};
const $z = /*@__PURE__*/ _const(6, $if_content__z);
const $global_flag = /*@__PURE__*/ _global_closure("b2", /* @__PURE__ */ _global_key(10, "flag"));
const $input_v__OR__$global_flag = /*@__PURE__*/ _global_or(7, ($scope) => $z($scope, $scope.e + $scope.$.flag), $global_flag);
const $if$1 = /*@__PURE__*/ _if(1, "<i></i>", " ", $if_content__setup$1);
const $input_v = /*@__PURE__*/ _const(4, ($scope) => {
	$if$1($scope, $scope.e ? 0 : 1);
	$input_v__OR__$global_flag($scope);
});
const $setup = $global_flag;
const $input_w = ($scope, input_w) => _attr($scope.a, "data-w", input_w);

// template.marko
const $if_content__input_w = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => $input_w($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$setup($scope.a);
	$input_v($scope.a, "a");
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content__setup);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
