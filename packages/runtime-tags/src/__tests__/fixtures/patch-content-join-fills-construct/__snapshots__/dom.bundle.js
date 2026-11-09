// tags/box.marko
const $value = /*@__PURE__*/ _fill_let("c1", 0, ($scope) => _return($scope, $scope.a));
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed.c0 = $valueChange;

// tags/counter.marko
const $input_base__OR__tick = /*@__PURE__*/ _or_patch("d1", 6, ($scope) => _text($scope.b, $scope.e + $scope.f));
const $tick = /*@__PURE__*/ _fill_let("d2", 5, $input_base__OR__tick);
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$tick($scope, +$scope.f + 1);
}));
const $input_base = /*@__PURE__*/ _const(4, $input_base__OR__tick);

// page.marko
const $aside_content__bonus__OR__p_base__OR__item_n = /*@__PURE__*/ _or_patch("a2", 1, ($scope) => $input_base($scope.a, ($scope._._.h ?? $scope._._.j) + $scope._.d), 2);
const $aside_content__bonus = /*@__PURE__*/ _closure_get_patch("a3", 10, $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._);
const $bonus = _var_resume("a0", /*@__PURE__*/ _const(7, /* @__PURE__ */ _closure($aside_content__bonus)));
const $setup__script = _script("a7", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
