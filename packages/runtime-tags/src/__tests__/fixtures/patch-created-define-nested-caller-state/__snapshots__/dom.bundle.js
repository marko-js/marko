// template.marko
const $if_content__v = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => _text($scope.a, $scope._.d));
const $Outer_content__v = ($scope, v) => $Inner_content__tag_input_v($scope.a, v);
const $Inner_content__tag_input_v = /*@__PURE__*/ _const(3, $if_content__v);
const $count = _let(5, ($scope) => $Outer_content__v($scope.a, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
