// tags/child.marko
const $if_content__v = /*@__PURE__*/ _closure_get_patch("b1", 8, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b0", 0);
const $D_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__v);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $for_content__input_on = /*@__PURE__*/ _for_closure_patch("b5", 0, ($scope) => $D_content__on($scope.a, $scope._.f), 7);
const $input_on = /*@__PURE__*/ _const(5, $for_content__input_on);

// template.marko
const $on = _let(6, ($scope) => $input_on($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
