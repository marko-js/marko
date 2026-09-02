// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_on__OR__active = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.e ? card_a_default : null, () => ({ label: $scope.f }))));
const $active = /*@__PURE__*/ _let(5, $input_on__OR__active);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$active($scope, !$scope.f);
}));
