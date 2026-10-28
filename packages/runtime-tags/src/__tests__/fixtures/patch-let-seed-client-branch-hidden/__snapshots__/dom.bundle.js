// template.marko
const $if_content__x = /*@__PURE__*/ _let(1, ($scope) => _text($scope.a, $scope.b));
const $if_content__input_v = /*@__PURE__*/ _fill_signal("4 a1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__x($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input_v);
const $on = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
