// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("c0", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resume("c0", $_return);

// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__store_set = /*@__PURE__*/ _init_closure_get("a8", 11, ($scope) => $if_content__count($scope, 0, $scope._._._.j), ($scope) => $scope._._._);
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $store = _var_resume("a3", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope.c, store_last);
const $store_set = /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($if_content__store_set));
