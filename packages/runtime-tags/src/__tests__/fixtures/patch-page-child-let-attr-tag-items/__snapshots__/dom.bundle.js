// tags/card.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, []);
}));

// template.marko
const $item_content2__input_label = _closure_get_patch("a1", 4, ($scope) => _text($scope.a, $scope._.d), 0, "a4", 1);
const $item_content__input_label = _closure_get_patch("a0", 4, ($scope) => _text($scope.a, $scope._.d), 0, "a4", 0);
