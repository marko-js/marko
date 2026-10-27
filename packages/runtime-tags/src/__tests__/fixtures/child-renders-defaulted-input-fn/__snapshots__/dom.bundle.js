// tags/label-view.marko
const $fmt = ($scope, fmt) => _text($scope.a, fmt());
const $input_fmt = ($scope, input_fmt) => $fmt($scope, input_fmt ?? (() => "none"));

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $input_fmt($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
