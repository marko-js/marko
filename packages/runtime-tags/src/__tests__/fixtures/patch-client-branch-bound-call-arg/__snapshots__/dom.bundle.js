// tags/call.marko
const $template = "<button>call</button>";
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.d[0]();
}));
const $setup = $setup__script$1;
const $input_fns = /*@__PURE__*/ _const(3);

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
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $input_fns($scope.a, [$f($scope)]), ($scope) => $scope._._, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup($scope.a);
};
const $card_content = _content$1("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $card_content__setup);
const $f = ($scope) => function() {
	console.log("fn", $scope._._.e);
};
_bind_resume("a0 >>e", $f);
