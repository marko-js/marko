// tags/badge.marko
const $template = "<span> </span>";
const $input_tag = ($scope, input_tag) => _text($scope.a, input_tag);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$input_tag($scope.a, "new");
};
const $card_content = _content$1("a1", /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l"), $card_content__setup);
