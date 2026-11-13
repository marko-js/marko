// tags/field.marko
const $template = "<input><label> </label>";
const $walks = " b D l";
const $input_id = ($scope, input_id) => {
	_attr($scope.a, "id", input_id);
	_attr($scope.b, "for", input_id);
};
const $input_describedby = ($scope, input_describedby) => _attr($scope.a, "aria-describedby", input_describedby);
const $input_label = ($scope, input_label) => _text($scope.c, input_label);

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
const $card_content__uid__OR__hint = /*@__PURE__*/ _or(4, ($scope) => $input_describedby($scope.a, `${$scope.c} ${$scope.d}`));
const $card_content__uid = /*@__PURE__*/ _const(2, ($scope) => {
	$input_id($scope.a, $scope.c);
	$card_content__uid__OR__hint($scope);
});
const $card_content__hint = /*@__PURE__*/ _const(3, ($scope) => {
	_attr($scope.b, "id", $scope.d);
	$card_content__uid__OR__hint($scope);
});
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__uid($scope, _id($scope));
	$card_content__hint($scope, _id($scope));
};
const $card_content = _content$1("a1", /*@__PURE__*/ ((_w0) => `${_w0}<p>hint</p>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks), $card_content__setup);
