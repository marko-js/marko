// tags/outer.marko
const $arr = ($scope, arr) => $arr_($scope, arr[0]);
const $T = fill("b1", /*@__PURE__*/ _let(5, ($scope) => $arr($scope, [$scope.f])));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__arr_ = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.h, ($_) => ({ title: $scope.e })));
const $arr_ = /*@__PURE__*/ _const(7, $input_label__OR__arr_);
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__arr_));
