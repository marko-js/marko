// template.marko
const $frame_content__input_label__OR__count = /*@__PURE__*/ _fill_join_subscribers("a2", 4, /*@__PURE__*/ _or(1, ($scope) => _attr($scope.a, "title", $scope._.e + ":" + $scope._.f)), 6, 0);
const $frame_content__input_label = _shell_closure_get("a5", 6, $frame_content__input_label__OR__count, 0, "a8");
const $frame_content__count = _shell_closure_get("a6", 7, $frame_content__input_label__OR__count, 0, "a9");
const $count = /*@__PURE__*/ _fill_let("a3", 5, /* @__PURE__ */ _closure($frame_content__count));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
