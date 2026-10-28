// tags/inner.marko
const $template = "<p><!></p>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card.marko
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__input_content);
const $on = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _fill_join_closure("a2", 3, /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0"), 0);
const $card_content = _content$1("a1", "<em> </em>", "D ", $card_content__input_label);
