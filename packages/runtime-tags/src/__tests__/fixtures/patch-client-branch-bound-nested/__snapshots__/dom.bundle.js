// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__outer = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => _text($scope.a, $scope._.b), 0, "a9", 0);
const $Inner_content = _content$1("a0", "<b> </b>", "D ", $Inner_content__outer);
_content_resume($Inner_content);
const $Inner2_content__input_label = /*@__PURE__*/ _closure_get_patch("a3", 6, ($scope) => _text($scope.a, $scope._._._._.e), ($scope) => $scope._._._._, "a12", 1);
const $Inner2_content = _content$1("a2", "<i> </i>", "D ", $Inner2_content__input_label);
_content_resume($Inner2_content);
