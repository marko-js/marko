// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a2", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $last = /*@__PURE__*/ _let(6, ($scope) => _text($scope.a, $scope.g));
const $valueChange = ($scope) => function(next) {
	$last($scope._, next);
};
_resumed.a0 = $valueChange;
