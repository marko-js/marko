// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $for_content__$global_brand = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_$global_brand#0:6/subscribe", "$global_brand/5", ($scope) => _text($scope["#text/0"], $scope.$global.brand), ($scope) => $scope._._);
const $for_content__setup = ($scope) => {
	$for_content__$global_brand($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $card_content__for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<p><!> <!></p>", "D%c%", $for_content__setup);
const $card_content__input_n = /*@__PURE__*/ _closure_get("input_n/4", ($scope) => $card_content__for($scope, [$scope._.input_n]), 0, "__tests__/template.marko_1_input_n#0:3/subscribe");
const $card_content__setup = ($scope) => {
	$card_content__input_n($scope);
	$card_content__$global_brand($scope);
};
const $card_content__$global_brand = /*@__PURE__*/ _closure_get("$global_brand/5", ($scope) => _text($scope["#text/0"], $scope.$global.brand), 0, "__tests__/template.marko_1_$global_brand#0:6/subscribe");
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<h1> </h1><!><!>", "D l%", $card_content__setup);
const $global_brand__closure = /*@__PURE__*/ _closure($card_content__$global_brand, $for_content__$global_brand);
const $global_brand = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_brand#6/subscribe", $global_brand__closure, "brand");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$global_brand($scope);
}
const $input = ($scope, input) => $input_n($scope, input.n);
const $input_n__closure = /*@__PURE__*/ _closure($card_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
