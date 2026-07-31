// template.marko
const $for_content__index = ($scope, index) => _text($scope, "a", index);
const $for_content__item_id = ($scope, item_id) => _text($scope, "b", item_id);
const $for_content__item_n = ($scope, item_n) => _text($scope, "c", item_n);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_n($scope, $params2[0]?.n);
	$for_content__index($scope, $params2[1]);
};
const $for = /*@__PURE__*/ _for_of(0, "<li><!>:<!>=<!></li>", "D%c%c%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.e.slice(1), $scope.e?.[0]]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.e.map((item) => item.id === "b" ? {
			...item,
			n: item.n + 10
		} : item));
	});
	_on($scope.d, "click", function() {
		$items($scope, [...$scope.e]);
	});
});
