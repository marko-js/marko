// tags/gm/index.marko
const $template = "<p></p><!><!>";
const $walks = " b%c";
const $if_content__z = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join("b4", 6, /*@__PURE__*/ _if_closure(1, 0, /* @__PURE__ */ _fill_global_join("b0", ($scope) => _attr($scope.a, "data-z", $scope._.g + $scope.$.mark), "mark"))));
const $if_content__setup$1 = $if_content__z;
const $z = /*@__PURE__*/ _fill_const("b4", 6, $if_content__z);
const $input_v__$global_flag = /*@__PURE__*/ _fill_global_join("b3", ($scope) => $z($scope, $scope.e + $scope.$.flag), "flag");
const $if$1 = /*@__PURE__*/ _if(1, "<i></i>", " ", $if_content__setup$1);
const $input_v = /*@__PURE__*/ _const(4, ($scope) => {
	$if$1($scope, $scope.e ? 0 : 1);
	$input_v__$global_flag($scope);
});
const $input_w = ($scope, input_w) => _attr($scope.a, "data-w", input_w);

// template.marko
const $if_content__input_w = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_w($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$input_v($scope.a, "a");
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
