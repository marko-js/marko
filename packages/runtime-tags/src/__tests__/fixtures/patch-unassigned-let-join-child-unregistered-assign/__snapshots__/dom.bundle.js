// tags/show-value.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// template.marko
const $joined = ($scope, joined) => $input_value($scope.b, joined);
const $input_w__OR__x = /*@__PURE__*/ _or(7, ($scope) => $joined($scope, $scope.g + $scope.f));
const $x = _let(6, $input_w__OR__x);
const $input_w = fill("a0", /*@__PURE__*/ _const(5, $input_w__OR__x));
