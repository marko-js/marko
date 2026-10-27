// template.marko
const $Badge_content__input_value = /*@__PURE__*/ _const(3, /* @__PURE__ */ _fill_global_join("a1", ($scope) => _text($scope.a, $scope.d + $scope.$.flag), "flag"));
const $count = /*@__PURE__*/ _let(2, ($scope) => $Badge_content__input_value($scope.a, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
