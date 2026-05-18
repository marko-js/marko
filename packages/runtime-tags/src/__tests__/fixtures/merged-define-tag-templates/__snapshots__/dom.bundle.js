// total: 2244 (min) 1192 (brotli)
// template.marko: 124 (min) 93 (brotli)
const $B_content__value_length = ($scope, value_length) => $A_content__value($scope.a, value_length);
const $B_content__tag_input_value = ($scope, value) => $B_content__value_length($scope, value?.length);
const $A_content__value = ($scope, value) => _text($scope.a, value);
const $value = /* @__PURE__ */ _let(1, ($scope) => $B_content__tag_input_value($scope.a, $scope.b));
const $setup__script = _script("a2", ($scope) => $value($scope, "hello"));
