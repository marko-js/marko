// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__h = /*@__PURE__*/ _closure_get_patch("a0", 2, ($scope) => _text($scope.a, $scope._.b), 0, "a3", 0);
const $card_content = _content$1("a1", "<p> </p>", "D ", $card_content__h);
