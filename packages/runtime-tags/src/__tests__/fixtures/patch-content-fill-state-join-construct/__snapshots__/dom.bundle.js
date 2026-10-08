// template.marko
const $card_content__count = _shell_closure_get("a8", 9, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._, "a10");
const $count = /*@__PURE__*/ _fill_let("a6", 6, /* @__PURE__ */ _closure($card_content__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
