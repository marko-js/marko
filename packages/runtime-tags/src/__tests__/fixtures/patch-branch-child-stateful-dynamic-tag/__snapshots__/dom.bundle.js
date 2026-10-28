// tags/child/index.marko
const $countbi_content__input_label = /*@__PURE__*/ _fill_closure("b3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "b1"), 0);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("b0", " ", " ", $countbi_content__input_label));
const $count = /*@__PURE__*/ _fill_let("b4", 5, ($scope) => $dynamicTag($scope, $scope.f ? "b" : "i"));
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
