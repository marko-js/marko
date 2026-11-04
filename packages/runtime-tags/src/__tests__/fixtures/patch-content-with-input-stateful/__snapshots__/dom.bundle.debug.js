// tags/card.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/card.marko_1_input_content#0:5/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content, ($_) => ({ x: 1 })));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_open#6/fill", "open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $input_open$1 = $open;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $card_content__input_note = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_note#0:4/subscribe", "input_note/5", ($scope) => _text($scope["#text/1"], $scope._.input_note), 0, "__tests__/template.marko_0_input_note#4/subscribers", 0);
const $card_content__setup = $card_content__input_note;
const $card_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0].x);
const $card_content = _content("__tests__/template.marko_1*content", "<em><!>:<!></em>", "D%c%", $card_content__setup, $card_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_open = ($scope, input_open) => $input_open$1($scope["#childScope/0"], input_open);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_open($scope, input.open);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
