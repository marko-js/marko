// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a4", 0, 0, ($scope) => _text($scope.b, $scope._.g * 2));
const $count = _let(6, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
