// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("b0", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resume("b0", $_return);

// template.marko
const $if_content__store = _var_resume("a1", ($scope, store) => {
	$if_content__store_last($scope, store?.last);
	$if_content__store_set($scope, store?.set);
});
const $if_content__store_last = ($scope, store_last) => _text($scope.c, store_last);
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 8, ($scope) => _text($scope.d, $scope.i));
const $if_content__store_set = ($scope, store_set) => $if_content__count($scope, 0, store_set);
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.e, "click", function() {
	$if_content__count($scope, +$scope.i + 1);
}));
