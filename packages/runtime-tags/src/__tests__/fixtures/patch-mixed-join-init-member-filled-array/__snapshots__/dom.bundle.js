// tags/panel.marko
const $template = "<!><!><!>";
const $if_content3__b = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_join_closure("b9 b10", 6, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, JSON.stringify($scope._._.g)), ($scope) => $scope._._, "b1"), 1));
const $if_content3__setup = $if_content3__b;
const $if_content2__input_a__OR__b = /*@__PURE__*/ _fill_join_if("b10 | b9", 6, /*@__PURE__*/ _fill_join_if("b11", 5, /*@__PURE__*/ _or_resume("b7", 1, ($scope) => _text($scope.a, $scope._._.f + ":" + JSON.stringify($scope._._.g))), 0, 0, 1, 0), 0, 0, 1, 0);
const $if_content2__input_a = /*@__PURE__*/ _closure_get(8, $if_content2__input_a__OR__b, ($scope) => $scope._._, "b5");
const $if_content2__setup = ($scope) => {
	$if_content2__input_a($scope);
	$if_content2__b($scope);
};
const $if_content2__b = /*@__PURE__*/ _closure_get(9, $if_content2__input_a__OR__b, ($scope) => $scope._._, "b6");
const $if_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content3__setup);
const $if_content__if2 = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _init_resume("b8", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__if($scope, $scope._.e ? 0 : 1);
	$if_content__if2($scope, $scope._.e ? 0 : 1);
}));
const $if_content__setup$1 = $if_content__input_show;
const $b__closure = /*@__PURE__*/ _closure($if_content2__b, $if_content3__b);
const $b = /*@__PURE__*/ _fill_const("b9", 6, $b__closure, /*@__PURE__*/ _fill_mark(6, $b__closure));
const $input_b = ($scope, input_b) => $b($scope, [input_b]);
const $if$1 = /*@__PURE__*/ _if(0, "<div></div><span></span>", " b ", $if_content__setup$1);
const $input_show = /*@__PURE__*/ _const(4, ($scope) => {
	$if$1($scope, $scope.e ? 0 : 1);
	$if_content__input_show($scope);
});
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
