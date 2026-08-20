// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _init_if_closure("a4", 0, 0, ($scope) => $if_content__for($scope, [$scope._.f]));
const $items = /*@__PURE__*/ _let(5, $if_content__items);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, "b"]);
}));
