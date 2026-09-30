// template.marko
const $card_content__count = _init_closure_get("a6", 9, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._, "a8");
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($card_content__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
