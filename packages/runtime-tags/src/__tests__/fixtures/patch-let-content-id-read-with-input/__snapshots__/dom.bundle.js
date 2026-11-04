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
const $card_content__input_label__OR__uid = /*@__PURE__*/ _or(4, ($scope) => _attr($scope.a, "title", $scope._.d + " " + $scope.d));
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => {
	_text($scope.c, $scope._.d);
	$card_content__input_label__OR__uid($scope);
}, 0, "a2", 0);
const $card_content__uid = /*@__PURE__*/ _const(3, ($scope) => {
	_attr($scope.a, "id", $scope.d);
	_attr($scope.b, "for", $scope.d);
	$card_content__input_label__OR__uid($scope);
});
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__uid($scope, _id($scope));
};
const $card_content = _content$1("a1", "<input><label> </label>", " b D ", $card_content__setup);
