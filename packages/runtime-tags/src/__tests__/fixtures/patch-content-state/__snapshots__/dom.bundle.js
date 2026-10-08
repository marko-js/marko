// template.marko
const $card_content__count = _shell_closure_get("a5", 8, ($scope) => _text($scope.a, $scope._.g), 0, "a8");
const $count = /*@__PURE__*/ _fill_let("a3", 6, /* @__PURE__ */ _closure($card_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
