// template.marko
const $frame_content__input_label__OR__count = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _attr($scope.a, "title", $scope._.e + ":" + $scope._.f));
const $frame_content__count = /*@__PURE__*/ _closure_get(7, $frame_content__input_label__OR__count, 0, "a2");
const $count = _let(5, /* @__PURE__ */ _closure($frame_content__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
