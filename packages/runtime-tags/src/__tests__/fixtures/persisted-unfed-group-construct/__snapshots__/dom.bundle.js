// tags/kid.marko
const $if_content__input_b = /*@__PURE__*/ _fill_join("b0", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("b1", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$on($scope, !$scope.h);
}));
