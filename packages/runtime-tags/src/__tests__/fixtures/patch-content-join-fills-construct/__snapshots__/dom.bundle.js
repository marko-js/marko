// tags/box.marko
const $value = /*@__PURE__*/ _fill_let("c1", 0, ($scope) => _return($scope, $scope.a));
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed.c0 = $valueChange;

// tags/counter.marko
const $input_base__OR__tick = /*@__PURE__*/ _fill_join("d2", 5, /*@__PURE__*/ _fill_join("d1", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.e + $scope.f))));
const $tick = /*@__PURE__*/ _fill_let("d2", 5, $input_base__OR__tick);
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$tick($scope, +$scope.f + 1);
}));
const $input_base = /*@__PURE__*/ _fill_const("d1", 4, $input_base__OR__tick);

// page.marko
const $aside_content__bonus__OR__p_base__OR__item_n = /*@__PURE__*/ _fill_join_subscribers("a4", 3, /*@__PURE__*/ _fill_join_subscribers("a6", 9, /*@__PURE__*/ _or(1, ($scope) => $input_base($scope.a, ($scope._._.h ?? $scope._._.j) + $scope._.d), 2), () => $aside_content__p_base, 0), () => $aside_content__item_n, 0);
const $aside_content__bonus = _init_closure_get("a8", 11, $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._, "a12");
const $aside_content__p_base = /*@__PURE__*/ _fill_join_closure("a6", 9, _init_closure_get("a9", 12, $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._, "a13"), 0);
const $aside_content__item_n = /*@__PURE__*/ _fill_join_closure("a4", 3, _init_closure_get("a10", 13, $aside_content__bonus__OR__p_base__OR__item_n, 0, "a14"), 0);
const $bonus = _var_resume("a2", /*@__PURE__*/ _const(7, /* @__PURE__ */ _closure($aside_content__bonus)));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
