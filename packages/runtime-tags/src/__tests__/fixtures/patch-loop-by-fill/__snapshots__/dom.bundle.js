// template.marko
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.n);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $input_keyField__OR__items = /*@__PURE__*/ _or_patch("a1", 6, ($scope) => $for($scope, [$scope.f, function(item) {
	return item[$scope.e];
}]));
const $items = _let(5, $input_keyField__OR__items);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, {
		n: 3,
		id: "z"
	}]);
}));
