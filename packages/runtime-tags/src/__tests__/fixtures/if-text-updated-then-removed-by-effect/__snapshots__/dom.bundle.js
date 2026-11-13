// template.marko
const $if_content__n = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.c));
const $if_content__setup = $if_content__n;
const $n__script = _script("a0", ($scope) => {
	if ($scope.c >= 2) $open($scope, false);
});
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	$if_content__n($scope);
	$n__script($scope);
});
const $if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
