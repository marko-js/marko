// tags/panel.marko
const $template = "<!><!><!>";
const $if_content3__b = /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "b0");
const $if_content3__setup = $if_content3__b;
const $if_content2__input_a__OR__b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.h + ":" + $scope._._.i));
const $if_content2__input_a = /*@__PURE__*/ _closure_get(11, $if_content2__input_a__OR__b, ($scope) => $scope._._, "b1");
const $if_content2__setup = ($scope) => {
	$if_content2__input_a($scope);
	$if_content2__b($scope);
};
const $if_content2__b = /*@__PURE__*/ _closure_get(12, $if_content2__input_a__OR__b, ($scope) => $scope._._, "b2");
const $if_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content3__setup);
const $if_content__if2 = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__if($scope, $scope._.g ? 0 : 1);
	$if_content__if2($scope, $scope._.g ? 0 : 1);
});
const $if_content__setup$1 = $if_content__input_show;
const $b = /*@__PURE__*/ _let_change(8, /* @__PURE__ */ _closure($if_content2__b, $if_content3__b));
const $input_b__OR__input_bChange = /*@__PURE__*/ _or(5, ($scope) => $b($scope, $scope.d, $scope.e));
const $input_b = /*@__PURE__*/ _const(3, $input_b__OR__input_bChange);
const $input_bChange = /*@__PURE__*/ _const(4, $input_b__OR__input_bChange);
const $if$1 = /*@__PURE__*/ _if(0, "<div></div><span></span>", " b ", $if_content__setup$1);
const $input_show = /*@__PURE__*/ _const(6, ($scope) => {
	$if$1($scope, $scope.g ? 0 : 1);
	$if_content__input_show($scope);
});
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const(7, $input_a__closure);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_a($scope.a, $scope._.h));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$input_bChange($scope.a, $bChange2);
	$input_b($scope.a, "z");
	$input_show($scope.a, true);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	$input_a($scope.a, $scope.h);
	$if($scope, $scope.h > 5 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
function $bChange2() {}
function $bChange() {}
_resumed.a1 = $bChange2;
_resumed.a0 = $bChange;
