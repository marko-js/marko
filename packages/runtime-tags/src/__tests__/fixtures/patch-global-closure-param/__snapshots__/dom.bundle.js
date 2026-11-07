// template.marko
const $wrap_content__z__OR__$global_mark = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _attr($scope.a, "data-z", $scope._.h + $scope.$.mark));
const $wrap_content__z = /*@__PURE__*/ _closure_get(9, $wrap_content__z__OR__$global_mark, 0, "a1");
const $wrap_content__$global_mark = /*@__PURE__*/ _closure_get(10, $wrap_content__z__OR__$global_mark, 0, "a2");
const $n = _let(6, ($scope) => _text($scope.c, $scope.g));
const $z = /*@__PURE__*/ _const(7, /* @__PURE__ */ _closure($wrap_content__z));
const $input_v__OR__$global_flag = /*@__PURE__*/ _or_patch("a7", 8, ($scope) => $z($scope, $scope.f + $scope.$.flag));
const $global_flag = _fill_global("a4", $input_v__OR__$global_flag, "flag");
const $global_mark = _fill_global("a5", /* @__PURE__ */ _closure($wrap_content__$global_mark), "mark");
const $setup__script = _script("a6", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
