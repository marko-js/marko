// tags/call.marko
const $template$2 = "<button>call</button>";
const $walks$2 = " b";
const $setup__script$1 = _script("__tests__/tags/call.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_fns[0]();
}));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => $input_fns($scope, input.fns);
const $input_fns = /*@__PURE__*/ _const("input_fns");
var call_default = /*@__PURE__*/ _template("__tests__/tags/call.marko", $template$2, " b", $setup$2, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => $input_fns($scope["#childScope/0"], [$f($scope)]), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup$2($scope["#childScope/0"]);
};
const $card_content = _content("__tests__/template.marko_2*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $f = ($scope) => function() {
	console.log("fn", $scope._._.input_label);
};
_bind_resume("__tests__/template.marko_2/f >>input_label", $f);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
