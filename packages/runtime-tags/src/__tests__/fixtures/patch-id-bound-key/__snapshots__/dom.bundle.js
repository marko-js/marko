// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("b1", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resumed.b0 = $_return;

// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a2", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__store_set = /*@__PURE__*/ _init_resume("a11", /*@__PURE__*/ _closure_get(14, ($scope) => $if_content__count($scope, 0, $scope._._.l), ($scope) => $scope._._));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $for_content__store = _var_resume("a0", ($scope, store) => {
	$for_content__store_last($scope, store?.last);
	$for_content__store_set($scope, store?.set);
});
const $for_content__store_last = ($scope, store_last) => _text($scope.g, store_last);
const $for_content__store_set = /*@__PURE__*/ _const(11, /* @__PURE__ */ _closure($if_content__store_set));
