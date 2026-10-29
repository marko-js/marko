// tags/child.marko
const $if_content__input_v = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input_v);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
