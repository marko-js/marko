// template.marko
_load_lazy("_a", () => import("./page.mjs").then(() => {}));

// tags/box.marko
const $value = /*@__PURE__*/ _fill_let("c0", 0, ($scope) => _return($scope, $scope.a));
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resume("c0", $valueChange);

// tags/counter.marko
const $input_base__OR__tick = /*@__PURE__*/ _fill_join("d1", 5, /*@__PURE__*/ _fill_join("d0", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.e + $scope.f))));
const $tick = /*@__PURE__*/ _fill_let("d1", 5, $input_base__OR__tick);
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$tick($scope, +$scope.f + 1);
}));
const $input_base$1 = /*@__PURE__*/ _fill_const("d0", 4, $input_base__OR__tick);

// page.marko
const $aside_content__live = /*@__PURE__*/ _init_closure_get("a5", 10, ($scope) => $input_base$1($scope.a, $scope._.j));
const $live = /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($aside_content__live));
const $input_base__OR__bonus = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(8, ($scope) => $live($scope, $scope.h ?? $scope.g), 1, 1));
const $bonus = _var_resume("a1", /*@__PURE__*/ _const(7, $input_base__OR__bonus));
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
const $input_base = _fill_const("a0", 6, $input_base__OR__bonus);
