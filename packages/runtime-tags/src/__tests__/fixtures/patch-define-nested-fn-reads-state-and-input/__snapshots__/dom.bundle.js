// template.marko
const $Outer_content__fn = ($scope, fn) => $Inner_content__fn($scope.a, fn);
const $Inner_content__fn__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.e));
const $Inner_content__fn = /*@__PURE__*/ _const(4, $Inner_content__fn__script);
const $input_step__OR__n = /*@__PURE__*/ _or_patch("a4", 7, ($scope) => $Outer_content__fn($scope.a, $fn($scope)));
const $n = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_step__OR__n($scope);
});
const $fn = ($scope) => function() {
	$n($scope, $scope.g + $scope.e);
};
_resumed.a0 = $fn;
