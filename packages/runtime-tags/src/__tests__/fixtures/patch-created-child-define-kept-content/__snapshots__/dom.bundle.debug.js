// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

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

// tags/child.marko
const $Body_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Body_content__template = $template$1;
const $template = $Body_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Body_content__walks);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_2_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/child.marko_0_input_label#3/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content("__tests__/tags/child.marko_2*content", "<span> </span>", "D ", $card_content__setup);
const $Body_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Body_content__setup($scope["#childScope/0"]);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
