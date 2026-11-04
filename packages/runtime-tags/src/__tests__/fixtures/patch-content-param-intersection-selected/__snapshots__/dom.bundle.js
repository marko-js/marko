// tags/owner.marko
const $if_content__input_a__OR__x = /*@__PURE__*/ _or_patch("b1", 1, ($scope) => _text($scope.a, $scope._._.f + $scope._.c));
const $if_content__input_a = /*@__PURE__*/ _closure_get_patch("b0", 7, $if_content__input_a__OR__x, ($scope) => $scope._._, "b8", 0);
const $if_content__setup = ($scope) => {
	$if_content__input_a($scope);
	$if_content__x._($scope);
};
const $if_content__x = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, $if_content__input_a__OR__x);
const $passon_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $passon_content__input_show = /*@__PURE__*/ _closure_get_patch("b5", 6, ($scope) => $passon_content__if($scope, $scope._.e ? 0 : 1), 0, "b7", 0);
const $passon_content__setup = $passon_content__input_show;
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content__x = /*@__PURE__*/ _const(2, $if_content__x);
const $passon_content = _content$1("b3", "<!><!><!>", "b%", $passon_content__setup, $passon_content__$params);
const $setup__script$1 = _script("b6", ($scope) => document.body.dataset.owner = "1");
const $input_show__closure = /*@__PURE__*/ _closure($passon_content__input_show);
const $input_show = /*@__PURE__*/ _const(4, $input_show__closure);

// template.marko
const $show = _let(6, ($scope) => $input_show($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.g);
}));
