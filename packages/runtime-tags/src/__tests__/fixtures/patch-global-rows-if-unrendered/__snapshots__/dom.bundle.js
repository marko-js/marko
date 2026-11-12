// template.marko
const $for_content__if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", /* @__PURE__ */ _global_if(/* @__PURE__ */ _global_key("x"), 1, 0, "a0", ($scope) => _text($scope.a, $scope.$.x)));
const $for_content__show = /*@__PURE__*/ _fill_let("a2", 3, ($scope) => $for_content__if($scope, $scope.d ? 0 : 1));
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__show($scope, !$scope.d);
}));
