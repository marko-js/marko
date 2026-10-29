// template.marko
const $if_content__input_w = /*@__PURE__*/ _fill_join("a1", 6, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if = /*@__PURE__*/ _if(2, "<p> </p>", "D ", $if_content__input_w);
const $show__OR__n = /*@__PURE__*/ _or(9, ($scope) => $if($scope, $scope.h && $scope.i < 2 ? 0 : 1));
const $n = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$show__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));
