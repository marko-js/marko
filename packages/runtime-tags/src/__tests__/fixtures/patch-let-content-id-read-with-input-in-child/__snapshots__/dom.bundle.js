// tags/field.marko
const $template = "<input><label> </label>";
const $walks = " b D l";
const $input_id__OR__input_label = /*@__PURE__*/ _or_patch("c0", 7, ($scope) => _attr($scope.a, "title", $scope.g + " " + $scope.f));
const $input_id = /*@__PURE__*/ _const(5, ($scope) => {
	_attr($scope.a, "id", $scope.f);
	_attr($scope.b, "for", $scope.f);
	$input_id__OR__input_label($scope);
});
const $input_label = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.c, $scope.g);
	$input_id__OR__input_label($scope);
});

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
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => $input_label($scope.a, $scope._.d), 0, "a2", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$input_id($scope.a, _id($scope));
};
const $card_content = _content$1("a1", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $card_content__setup);
