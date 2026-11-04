// tags/card.marko
const $g2__script = _script("b1", ($scope) => console.log("run", $scope.f()));
const $g2 = /*@__PURE__*/ _const(5, $g2__script);
const $input_fn__OR__open = /*@__PURE__*/ _or(4, ($scope) => $g2($scope, $scope.d ? $scope.c : $g));
const $input_fn = /*@__PURE__*/ _const(2, $input_fn__OR__open);
function $g() {
	return "-";
}
_resumed.b0 = $g;

// template.marko
const $input_label__OR__n = /*@__PURE__*/ _or(8, ($scope) => $input_fn($scope.a, $fn($scope)));
const $n = /*@__PURE__*/ _let(7, $input_label__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
const $fn = ($scope) => function() {
	return "f:" + $scope.f + $scope.h;
};
_resumed.a0 = $fn;
