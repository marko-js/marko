// tags/label-view.marko
const $get = ($scope, get) => _text($scope.a, get());
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _or(6, ($scope) => $get($scope, $scope.d ? $scope.e : $scope.f), 2);
const $input_a = /*@__PURE__*/ _const(4, $input_flag__OR__input_a__OR__input_b);

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $input_a($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
function $b() {
	return "x";
}
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a2 = $b;
_resumed.a0 = $up;
_resumed.a1 = $low;
