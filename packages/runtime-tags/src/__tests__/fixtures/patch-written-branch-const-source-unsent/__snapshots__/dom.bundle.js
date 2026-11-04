// tags/child.marko
const $if_content2__v = /*@__PURE__*/ _if_closure_patch("b0", 0, 0, ($scope) => _text($scope.a, $scope._.b));
const $if_content2__setup = $if_content2__v;
const $if_content__if = /*@__PURE__*/ _if(0, "<b> </b>", "D ", $if_content2__setup);
const $if_content__input_on = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $input_on = /*@__PURE__*/ _const(5, $if_content__input_on);

// template.marko
const $on = _let(6, ($scope) => $input_on($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
