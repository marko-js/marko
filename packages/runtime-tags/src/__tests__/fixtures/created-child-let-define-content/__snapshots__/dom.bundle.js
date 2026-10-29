// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $value = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, void 0);
}));

// template.marko
const $Body_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $Body_content = _content("a0", "<em> </em>", "D ", $Body_content__input_label);
