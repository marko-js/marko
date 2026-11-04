// tags/card.marko
const $if_content__input = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d.fn()));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input);
const $open = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.e);
}));

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $fn;
