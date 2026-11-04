// tags/card.marko
const $if_content2__input_label = /*@__PURE__*/ _if_closure_patch("b9", 1, 0, ($scope) => _text($scope.a, $scope._.i));
const $if_content2__setup = $if_content2__input_label;
const $if2 = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b12", 9, ($scope) => $if2($scope, $scope.j ? 0 : 1));
const $setup__script = _script("b10", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_label__script = _script("b11", ($scope) => console.log("label", $scope.i));
