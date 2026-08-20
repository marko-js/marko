// template.marko
const $frame_content__input_label__OR__count = /*@__PURE__*/ _fill_join_subscribers("a0", 4, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), () => $frame_content__input_label, 0);
const $frame_content__input_label = /*@__PURE__*/ _closure_get(6, $frame_content__input_label__OR__count);
const $frame_content__count = /*@__PURE__*/ _closure_get(7, $frame_content__input_label__OR__count);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($frame_content__count));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
