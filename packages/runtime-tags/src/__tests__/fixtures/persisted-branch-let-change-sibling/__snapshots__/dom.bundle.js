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
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__store_set = /*@__PURE__*/ _init_if_closure("a4", 4, 0, ($scope) => $if_content__count($scope, 0, $scope._.l));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $store = _var_resume("a1", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope.d, store_last);
const $store_set = /*@__PURE__*/ _const(11, $if_content__store_set);
