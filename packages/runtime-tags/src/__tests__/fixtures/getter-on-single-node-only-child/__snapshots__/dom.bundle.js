// template.marko
const $for_content__$params = ($scope, item) => _text($scope.a, item);
const $ul_getter = /*@__PURE__*/ _el(1);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<li> </li>", "D ", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$items($scope, [...$scope.c, $scope.c.length]);
	});
	$ul_getter($scope)().classList.add("attached");
});
