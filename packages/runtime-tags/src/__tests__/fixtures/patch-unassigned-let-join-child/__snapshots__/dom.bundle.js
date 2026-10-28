// tags/show-value.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// template.marko
const $joined = ($scope, joined) => $input_value($scope.a, joined);
const $input_w__OR__x = /*@__PURE__*/ _or(6, ($scope) => $joined($scope, $scope.f + $scope.e));
const $x = fill("a1", /*@__PURE__*/ _let(5, $input_w__OR__x));
const $input_w = fill("a0", /*@__PURE__*/ _const(4, $input_w__OR__x));
