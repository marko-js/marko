// tags/plain-let.marko
const $value = /*@__PURE__*/ _let(3, ($scope) => _return($scope, $scope.d));
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed.b0 = $valueChange;

// tags/row-list.marko
const $if_content__input_settled__OR__bounty__OR__t = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.c + $scope._._.j + $scope._._.i), 2);
const $if_content__bounty = /*@__PURE__*/ _closure_get(12, $if_content__input_settled__OR__bounty__OR__t, ($scope) => $scope._._, "c2");
const $bounty = _var_resume("c0", /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($if_content__bounty)));
const $setup__script = _script("c3", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, +$scope.j + 1);
}));
