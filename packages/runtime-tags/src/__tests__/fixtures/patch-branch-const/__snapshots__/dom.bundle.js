// template.marko
const $if_content__doubled = ($scope, doubled) => _text($scope.b, doubled);
const $if_content__count = _shell_if_closure("a5", 0, 0, ($scope) => $if_content__doubled($scope, $scope._.g * 2));
const $count = /*@__PURE__*/ _fill_let("a3", 6, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
