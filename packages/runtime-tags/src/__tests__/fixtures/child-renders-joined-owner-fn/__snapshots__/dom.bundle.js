// tags/label-view.marko
const $get = ($scope, get) => _text($scope.a, get());
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _or(6, ($scope) => $get($scope, $scope.d ? $scope.e : $scope.f), 2);
const $input_a = /*@__PURE__*/ _const(4, $input_flag__OR__input_a__OR__input_b);

// template.marko
const $n = /*@__PURE__*/ _let(5, ($scope) => $input_a($scope.a, $a($scope)));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
const $a = ($scope) => () => "x" + $scope.f;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a1 = $a;
_resumed.a0 = $low;
