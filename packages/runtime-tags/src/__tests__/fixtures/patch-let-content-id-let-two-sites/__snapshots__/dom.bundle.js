// tags/inner.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card.marko
const $c = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => {
	$input_content($scope.b, $scope.g);
	$input_content($scope.c, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $card_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__uid($scope, _id($scope));
};
const $card_content = _content$1("a1", "<input><label> </label>", " b D ", $card_content__setup);
