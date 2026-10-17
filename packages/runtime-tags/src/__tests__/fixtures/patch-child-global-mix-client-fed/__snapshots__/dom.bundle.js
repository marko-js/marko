// tags/gm/index.marko
const $z = /*@__PURE__*/ _const(4, /* @__PURE__ */ _fill_global_join("mark", "b1", ($scope) => _text($scope.a, $scope.e + $scope.$.mark)));
const $input_v__$global_flag = /*@__PURE__*/ _fill_global_join("flag", "b0", ($scope) => $z($scope, $scope.d + $scope.$.flag));
const $input_v = /*@__PURE__*/ _const(3, $input_v__$global_flag);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 3, ($scope) => {
	$input_v($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
