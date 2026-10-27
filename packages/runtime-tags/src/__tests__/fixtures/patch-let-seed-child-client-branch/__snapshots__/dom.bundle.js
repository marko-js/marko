// tags/child.marko
const $if_content__x = /*@__PURE__*/ _let(2, ($scope) => _text($scope.a, $scope.c));
const $if_content__input_v = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__x($scope, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_w._($scope);
};
const $if_content__input_w = /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.f)));
const $if = /*@__PURE__*/ _if(1, "<p><!> <!></p>", "D%c%", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("b3", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
