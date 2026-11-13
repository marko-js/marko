// tags/card.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $o = /*@__PURE__*/ _fill_let("c1", 6, ($scope) => {
	$input_value($scope.b, $scope.g === void 0);
	$dynamicTag($scope, $scope.g);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $outer_content = _content$1("a1", "<em>static <!></em>", "Db%", $outer_content__input_label);
