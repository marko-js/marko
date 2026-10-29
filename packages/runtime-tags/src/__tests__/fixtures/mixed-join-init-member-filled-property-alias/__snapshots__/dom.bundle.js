// tags/panel.marko
const $template = "<!><!><!>";
const $if_content3__input_b = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b0");
const $if_content3__setup = $if_content3__input_b;
const $if_content2__input_a__OR__input_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.e + ":" + $scope._._.f));
const $if_content2__input_a = /*@__PURE__*/ _closure_get(7, $if_content2__input_a__OR__input_b, ($scope) => $scope._._, "b1");
const $if_content2__setup = ($scope) => {
	$if_content2__input_a($scope);
	$if_content2__input_b($scope);
};
const $if_content2__input_b = /*@__PURE__*/ _closure_get(8, $if_content2__input_a__OR__input_b, ($scope) => $scope._._, "b2");
const $if_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content3__setup);
const $if_content__if2 = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__if($scope, $scope._.d ? 0 : 1);
	$if_content__if2($scope, $scope._.d ? 0 : 1);
});
const $if$1 = /*@__PURE__*/ _if(0, "<div></div><span></span>", " b ", $if_content__input_show);
const $input_show = /*@__PURE__*/ _const(3, ($scope) => {
	$if$1($scope, $scope.d ? 0 : 1);
	$if_content__input_show($scope);
});
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const(4, $input_a__closure);
const $b__closure = /*@__PURE__*/ _closure($if_content2__input_b, $if_content3__input_b);
const $b = /*@__PURE__*/ _const(5, $b__closure);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_a($scope.a, $scope._.h));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$b($scope.a, "z");
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
