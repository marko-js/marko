// tags/child.marko
const $input_b__OR__fmt__script = _script("b1", ($scope) => _lifecycle($scope, { onUpdate: function() {
	console.log("update", $scope.f() + $scope.e);
} }));
const $input_b__OR__fmt = /*@__PURE__*/ _or(6, ($scope) => {
	_text($scope.a, $scope.f() + $scope.e);
	$input_b__OR__fmt__script($scope);
});
const $input_b = /*@__PURE__*/ _const(4, $input_b__OR__fmt);
const $fmt = ($scope) => () => $scope.d + "!";
_resumed.b0 = $fmt;

// template.marko
const $n = /*@__PURE__*/ _let(7, ($scope) => $input_b($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
