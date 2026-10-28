// template.marko
const $if_content2__input_title__OR__count = /*@__PURE__*/ _fill_signal("8 a7", /*@__PURE__*/ _or_resume("a10", 1, ($scope) => _text($scope.a, $scope._._.i + "@" + $scope._._.j)), ($signal) => /*@__PURE__*/ _if_closure(1, 0, /*@__PURE__*/ _if_closure(0, 0, $signal)));
const $if_content2__count = /*@__PURE__*/ _init_resume("a9", /*@__PURE__*/ _closure_get(12, $if_content2__input_title__OR__count, ($scope) => $scope._._, "a1"));
const $count = /*@__PURE__*/ _let(9, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.j + 1);
}));
