// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a2", 3, ($scope) => _text($scope.a, $scope.d));
const $if_content__handler = _let(2, ($scope) => $if_content__count($scope, 0, $scope.c));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.d + 1);
}));
const $last = _let(7, ($scope) => _text($scope.b, $scope.h));
const $handler = ($scope) => (next) => {
	$last($scope._, next);
};
_resumed.a0 = $handler;
