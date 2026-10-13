// tags/card.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $if_content__input__script = _script("__tests__/tags/card.marko_1_input#0:3", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__input = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#div/0", $scope._.input);
	$if_content__input__script($scope);
}));
const $if_content__setup = $if_content__input;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $input_open$1 = $open;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
const $setup$1 = $setup__script;
const $input$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input", ($scope) => {
	$if_content__input($scope);
	$input_open$1($scope, $scope.input.open);
}, $if_content__input);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0);
const $card_content__setup = $card_content__input_note;
const $card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_open = ($scope, input_open) => $input$1($scope["#childScope/0"], {
	open: input_open,
	content: $card_content($scope)
});
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
