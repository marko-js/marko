// tags/child.marko
const $if_content2__input_on = /*@__PURE__*/ _closure_get_patch("b0", 5, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "b5", 0);
const $D_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content2__input_on);
const $D_content__x = ($scope, x) => $D_content__if($scope, x ? 0 : 1);
const $if_content__input_y = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, ($scope) => $D_content__x($scope.a, $scope._.e));
const $input_y = /*@__PURE__*/ _const(4, $if_content__input_y);

// template.marko
const $y = _let(5, ($scope) => $input_y($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$y($scope, !$scope.f);
}));
