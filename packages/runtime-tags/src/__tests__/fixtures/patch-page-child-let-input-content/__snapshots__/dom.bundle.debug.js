// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $card_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>static <!></em>", "Db%", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input$1($scope["#childScope/0"], { content: $card_content($scope) });
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $c = _let("c/4", ($scope) => $c_content($scope, $scope.c?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c_content = /*@__PURE__*/ _const("c_content", ($scope) => $dynamicTag($scope, $scope.c_content));
const $input = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, {});
}));
const $setup = $setup__script;
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
