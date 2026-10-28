// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a4", 3, ($scope) => _text($scope.b, $scope.d));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$if_content__count($scope, +$scope.d + 1);
}));
const $last = /*@__PURE__*/ _let(6, ($scope) => _text($scope.a, $scope.g));
const $onCount = ($scope) => (next) => {
	$last($scope, next);
};
_resumed.a0 = $onCount;
