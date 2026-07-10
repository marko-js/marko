// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.d));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let(3, $for_content__count);
const $for = /*@__PURE__*/ _for_of(0, "<span><!>:<!></span>", "D%c%l", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, (item) => item]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, $scope.d + 1);
		$items($scope, [4, ...$scope.e.slice(0, 2).reverse()]);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.d + 1);
	});
});
