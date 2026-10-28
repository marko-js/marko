// template.marko
const $frame_content__input_label__OR__count = /*@__PURE__*/ _fill_join_subscribers("a4", 4, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), 6, 0);
const $frame_content__count = /*@__PURE__*/ _closure_get(7, $frame_content__input_label__OR__count, 0, "a1");
const $count = _let(5, /* @__PURE__ */ _closure($frame_content__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
