// tags/inner.marko
const $template = "<p><!></p>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card.marko
const $for_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _for_closure(1, ($scope) => $input_content($scope.a, $scope._.e)));
const $for = /*@__PURE__*/ _for_until_unkeyed(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $for_content__input_content);
const $n = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $for($scope, [
	$scope.f,
	0,
	1
]));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _fill_join_closure("a2", 3, /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0"), 0);
const $card_content = _content$1("a1", "<em> </em>", "D ", $card_content__input_label);
