// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("c0", 1, ($scope) => _text($scope.a, $scope.b));
const $_return = ($scope) => (next) => {
	$last($scope, next);
};
_resumed.c0 = $_return;

// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $setLast_getter = _hoist_resume("a2", 2, "B1");
