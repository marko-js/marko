// tags/setter.marko
const $template = "<button>set</button>";
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$scope.d[0]().id = "set";
}));
const $setup = $setup__script$1;
const $input_get = /*@__PURE__*/ _const(3);

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
const $card_content__el_getter = _el("a0", 0);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup($scope.c);
	$input_get($scope.c, [$card_content__el_getter($scope)]);
};
const $card_content = _content$1("a2", /*@__PURE__*/ ((_w0) => `<div> </div>${_w0}`)($template), /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)(" b"), $card_content__setup);
