// tags/card.marko
const $Panel_content__if = /*@__PURE__*/ _if(0, "<p><b>yes</b></p>");
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $n = fill("b1", /*@__PURE__*/ _let(4, ($scope) => $Panel_content__open($scope.a, $scope.e)));

// template.marko
const $c = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.i + 1);
}));
