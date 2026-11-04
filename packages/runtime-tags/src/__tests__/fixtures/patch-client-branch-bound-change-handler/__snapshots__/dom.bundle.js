// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => _attr_input_value($scope, "a", $scope._._.e, $valueChange($scope)), ($scope) => $scope._._, "a5", 0);
const $card_content__setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__setup__script($scope);
};
const $card_content = _content$1("a3", "<input>", " ", $card_content__setup);
const $valueChange = ($scope) => function(v) {
	console.log("change", v, $scope._._.e);
};
_bind_resume("a0 >>e", $valueChange);
