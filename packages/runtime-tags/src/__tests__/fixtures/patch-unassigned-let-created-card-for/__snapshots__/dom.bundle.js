// tags/card.marko
const $for_content__input_w = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.e)));
const $for_content__setup = $for_content__input_w;
const $for_content__i = ($scope, i) => _text($scope.a, i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $rows = fill("b1", /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f])));
