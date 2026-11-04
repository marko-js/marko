// tags/card2.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $c = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, []);
}));

// template.marko
const $item_content2__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a5", 1);
const $item_content2 = _content$1("a3", "<i> </i>", "D ", $item_content2__input_label);
const $item_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a5", 0);
const $item_content = _content$1("a2", "<b> </b>", "D ", $item_content__input_label);
