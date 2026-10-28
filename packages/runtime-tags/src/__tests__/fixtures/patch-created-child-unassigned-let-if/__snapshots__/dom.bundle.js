// tags/card.marko
const $if_content__input_n = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $if = /*@__PURE__*/ _if(0, "<p><b>yes</b> <!></p>", "Dc%", $if_content__input_n);
const $n = _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));

// template.marko
const $c = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.i + 1);
}));
