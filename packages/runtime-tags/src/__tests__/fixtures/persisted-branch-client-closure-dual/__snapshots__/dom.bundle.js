// template.marko
const $if_content3__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, "s:" + $scope._._.e), ($scope) => $scope._._), 1);
const $if_content3__setup = $if_content3__input_title;
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, "p:" + $scope._._.e), ($scope) => $scope._._), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__input_title);
const $if_content__if2 = /*@__PURE__*/ _if(1, "<span> </span>", "D ", $if_content3__setup);
const $if_content__b = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__if($scope, $scope._.g ? 0 : 1);
	$if_content__if2($scope, $scope._.g ? 0 : 1);
});
const $if_content__setup = $if_content__b;
const $if = /*@__PURE__*/ _if(0, "<!><!><!><!>", "b%b%", $if_content__setup);
const $a = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $b = /*@__PURE__*/ _let(6, $if_content__b);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$a($scope, !$scope.f);
	$b($scope, !$scope.g);
}));
