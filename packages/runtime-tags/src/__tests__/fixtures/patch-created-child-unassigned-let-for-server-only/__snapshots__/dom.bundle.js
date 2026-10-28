// tags/card.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li> </li>", "D ", 0, $for_content__$params);
const $items = fill("b0", /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e])));
