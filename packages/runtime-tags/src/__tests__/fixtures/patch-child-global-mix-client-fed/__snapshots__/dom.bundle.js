// tags/gm/index.marko
const $z = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.e + $scope.$.mark), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("mark"), "b1")));
const $input_v__OR__$global_flag = /*@__PURE__*/ _global_or(($scope) => $z($scope, $scope.d + $scope.$.flag), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("flag"), "b0"));
const $input_v = /*@__PURE__*/ _const(3, $input_v__OR__$global_flag);

// template.marko
const $count = _let(3, ($scope) => {
	$input_v($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
