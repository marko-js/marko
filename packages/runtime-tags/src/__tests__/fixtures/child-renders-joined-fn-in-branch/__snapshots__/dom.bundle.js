// tags/label-view.marko
const $if_content__get = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.j()));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__get);
const $open = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.i);
}));
const $get = /*@__PURE__*/ _const(9, $if_content__get);
const $input_flag__OR__input_a__OR__input_b = /*@__PURE__*/ _or(7, ($scope) => $get($scope, $scope.e ? $scope.f : $scope.g), 2);
const $input_a = /*@__PURE__*/ _const(5, $input_flag__OR__input_a__OR__input_b);

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $input_a($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
