// template.marko
const $for_content__selected__OR__hovered = /*@__PURE__*/ _or(2, ($scope) => _attr_class($scope.a, [$scope._.d === $scope.M && "sel", $scope._.e === $scope.M && "hov"]));
const $for_content__selected = /*@__PURE__*/ _for_selector(2, 3, "M", $for_content__selected__OR__hovered);
const $for_content__hovered = /*@__PURE__*/ _for_selector(2, 4, "M", $for_content__selected__OR__hovered);
const $selected = /*@__PURE__*/ _let(3, $for_content__selected);
const $hovered = /*@__PURE__*/ _let(4, $for_content__hovered);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$selected($scope, 3);
	});
	_on($scope.b, "click", function() {
		$hovered($scope, 3);
	});
});
