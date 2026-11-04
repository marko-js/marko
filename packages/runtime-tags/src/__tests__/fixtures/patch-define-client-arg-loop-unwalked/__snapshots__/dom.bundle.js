// template.marko
const $for_content__v = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a7", 0);
const $Outer_content__v = ($scope, v) => $Inner_content__tag_input_v($scope.a, v);
const $Inner_content__tag_input_v = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($for_content__v));
const $count = _let(5, ($scope) => $Outer_content__v($scope.a, $scope.f));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
