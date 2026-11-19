// template.marko
const $for_content__setup = ($scope) => _text($scope.b, $scope.M);
const $for_content__$params = ($scope, item, index) => {
	_text($scope.c, item?.n);
	_text($scope.a, index);
};
const $for = /*@__PURE__*/ _for_of(0, "<li><!>:<!>=<!></li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.e.slice(1), $scope.e[0]]);
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
