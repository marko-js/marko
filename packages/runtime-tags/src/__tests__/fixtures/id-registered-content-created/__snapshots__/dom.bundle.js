// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = /*@__PURE__*/ _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.g ? void 0 : $scope.f);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a0");
const $card_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__uid($scope, _id($scope));
};
const $card_content = _content("a1", "<input><label> </label>", " b D ", $card_content__setup);
