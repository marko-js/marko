// tags/show-value.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// template.marko
const $if_content__y = fill("a1", /*@__PURE__*/ _let(2, ($scope) => $input_value($scope.b, $scope.c)));
