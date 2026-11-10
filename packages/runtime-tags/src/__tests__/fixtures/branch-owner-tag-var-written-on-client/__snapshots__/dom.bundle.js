// tags/counter.marko
const $count$1 = /*@__PURE__*/ _let(1, ($scope) => _return($scope, $scope.b));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count$1($scope, +$scope.b + 1);
}));

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.d));
const $if = /*@__PURE__*/ _if(2, "<p> </p>", "D ", $if_content__count);
const $count = _var_resume("a0", /*@__PURE__*/ _const(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$if_content__count($scope);
}));
