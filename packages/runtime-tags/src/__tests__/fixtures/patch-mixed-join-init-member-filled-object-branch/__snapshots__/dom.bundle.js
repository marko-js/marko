// tags/panel.marko
const $template = "<!><!><!>";
const $if_content3__b = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.c))));
const $if_content3__setup = $if_content3__b;
const $if_content2__input_a__OR__b = /*@__PURE__*/ _fill_join_if("b9", 5, /*@__PURE__*/ _or_resume("b5", 1, ($scope) => _text($scope.a, $scope._._.f + ":" + JSON.stringify($scope._.c))), 0, 0, 1, 0);
const $if_content2__input_a = /*@__PURE__*/ _closure_get(8, $if_content2__input_a__OR__b, ($scope) => $scope._._, "b4");
const $if_content2__setup = ($scope) => {
	$if_content2__input_a($scope);
	$if_content2__b._($scope);
};
const $if_content2__b = /*@__PURE__*/ _if_closure(1, 0, $if_content2__input_a__OR__b);
const $if_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content3__setup);
const $if_content__if2 = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__if($scope, $scope._.d ? 0 : 1);
	$if_content__if2($scope, $scope._.d ? 0 : 1);
}));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_b._($scope);
};
const $if_content__b = /*@__PURE__*/ _const(2, ($scope) => {
	$if_content2__b($scope);
	$if_content3__b($scope);
});
const $if_content__input_b = /*@__PURE__*/ _init_resume("b7", /*@__PURE__*/ _fill_join("b8", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__b($scope, { value: $scope._.e }))));
const $if$1 = /*@__PURE__*/ _if(0, "<div></div><span></span>", " b ", $if_content__setup$1);
const $input_show = /*@__PURE__*/ _const(3, ($scope) => {
	$if$1($scope, $scope.d ? 0 : 1);
	$if_content__input_show($scope);
});
const $input_b = /*@__PURE__*/ _fill_const("b8", 4, $if_content__input_b);
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_a($scope.a, $scope._.h));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$input_b($scope.a, "z");
	$input_show($scope.a, true);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	$input_a($scope.a, $scope.h);
	$if($scope, $scope.h > 5 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
