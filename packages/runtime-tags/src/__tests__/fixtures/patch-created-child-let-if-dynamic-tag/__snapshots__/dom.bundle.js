// tags/card.marko
const $if_content__input_n = /*@__PURE__*/ _if_closure_patch("b0", 1, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<p><b>yes</b> <!></p>", "Dc%", $if_content__input_n);
const $n = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, !$scope.f);
}));

// template.marko
const $c = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.i + 1);
}));
