// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._._._.e), ($scope) => $scope._._._, "a6", 0);
const $Inner_content = _content$1("a0", "<b> </b>", "D ", $Inner_content__input_label);
_content_resume($Inner_content);
