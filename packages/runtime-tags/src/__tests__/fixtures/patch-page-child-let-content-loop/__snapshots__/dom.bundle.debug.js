// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content__$params);
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_c#4/fill", "c/4", ($scope) => $for($scope, [[$scope.c]]));
const $input$1 = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, {});
}));
const $setup$1 = $setup__script;
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content_resume("__tests__/template.marko_1*content", "<em>one <!></em>", "Db%", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input$1($scope["#childScope/0"], { content: $card_content($scope) });
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
