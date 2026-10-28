// template.marko
const $for_content__i = ($scope, i) => _text($scope.a, i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<p> </p>", "D ", 0, $for_content__$params);
const $if_content__xs = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.f])));
const $xs = fill("a1", /*@__PURE__*/ _let(5, $if_content__xs));
