// tags/card.marko
const $if_content2__input_label = /*@__PURE__*/ _fill("b13 b14", 8, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.i)));
const $if_content2__setup = $if_content2__input_label;
const $if2 = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b15", 9, ($scope) => $if2($scope, $scope.j ? 0 : 1));
const $setup__script = _script("b9", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
const $input_label__script = _script("b10", ($scope) => console.log("label", $scope.i));
