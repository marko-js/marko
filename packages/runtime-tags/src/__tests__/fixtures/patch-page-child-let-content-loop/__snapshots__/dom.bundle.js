// tags/card.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $c = /*@__PURE__*/ _fill_let("b1", 4, ($scope) => $for($scope, [[$scope.e]]));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, {});
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => _text($scope.a, $scope._.d), 0, "a2", 0);
const $card_content = _content("a1", "<em>one <!></em>", "Db%", $card_content__input_label);
