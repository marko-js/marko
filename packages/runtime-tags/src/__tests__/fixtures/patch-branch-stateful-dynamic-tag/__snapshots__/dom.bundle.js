// template.marko
const $countbi_content__input_label = /*@__PURE__*/ _fill_join_closure("a4", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a2"), 0);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("a1", " ", " ", $countbi_content__input_label));
const $if_content__count = /*@__PURE__*/ _shell_init("a7", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.g ? "b" : "i")));
const $count = /*@__PURE__*/ _fill_let("a5", 6, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
