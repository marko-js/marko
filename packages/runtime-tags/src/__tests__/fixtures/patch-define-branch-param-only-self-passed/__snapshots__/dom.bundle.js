// tags/child.marko
const $R_content__walks = "b%b%c";
const $R_content__template = "<!><!><!><!>";
const $if_content3__setup = ($scope) => {
	$scope.a._ = $scope._;
	$R_content__flip($scope.a, true);
	$R_content__tag_input_depth($scope.a, 1);
};
const $if_content2__flip = /*@__PURE__*/ _if_closure_patch("b8", 1, 0, ($scope) => $R_content__flip($scope.a, !$scope._.e));
const $if_content2__setup = ($scope) => {
	$if_content2__flip._($scope);
	$if_content2__depth._($scope);
	$scope.a._ = $scope._._;
};
const $if_content2__depth = /*@__PURE__*/ _if_closure_patch("b9", 1, 0, ($scope) => $R_content__tag_input_depth($scope.a, $scope._.f - 1));
const $if_content__input_v = /*@__PURE__*/ _closure_get_patch("b0", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b5", 0);
const $R_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__input_v);
const $R_content__flip = /*@__PURE__*/ _const(4, ($scope) => {
	$R_content__if($scope, $scope.e ? 0 : 1);
	$if_content2__flip($scope);
});
const $R_content__if2 = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks), $if_content2__setup);
const $R_content__tag_input_depth = /*@__PURE__*/ _const(5, ($scope) => {
	$R_content__if2($scope, $scope.f ? 0 : 1);
	$if_content2__depth($scope);
});
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks), $if_content3__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);

// template.marko
const $on = _let(5, ($scope) => $input_on($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
