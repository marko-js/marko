// template.marko
const $for_content__for = /*@__PURE__*/ _for_until_unkeyed(1, "<b> </b>", "D ", /* @__PURE__ */ _global_for(/* @__PURE__ */ _global_key("x"), 1, "a0", ($scope) => _text($scope.a, $scope.$.x)));
const $for_content__n = /*@__PURE__*/ _fill_let("a2", 3, ($scope) => $for_content__for($scope, [$scope.d]));
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__n($scope, +$scope.d + 1);
}));
