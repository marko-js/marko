// tags/gm/index.marko
const $z = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(6, ($scope) => _text($scope.a, $scope.e + $scope.$.mark), /* @__PURE__ */ _global_closure("b1", /* @__PURE__ */ _global_key(9, "mark"))));
const $input_v__OR__$global_flag = /*@__PURE__*/ _global_or(5, ($scope) => $z($scope, $scope.d + $scope.$.flag), /* @__PURE__ */ _global_closure("b0", /* @__PURE__ */ _global_key(8, "flag")));
const $input_v = /*@__PURE__*/ _const(3, $input_v__OR__$global_flag);

// template.marko
const $count = _let(3, ($scope) => {
	$input_v($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
