// template.marko
const $for_content__item_n = ($scope, item_n) => _text($scope.a, item_n);
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $input_keyField__OR__items = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $for($scope, [$scope.f, function(item) {
	return item[$scope.e];
}])));
const $items = /*@__PURE__*/ _let(5, $input_keyField__OR__items);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, {
		n: 3,
		id: "z"
	}]);
}));
