// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!><footer><!></footer></section>";
const $walks$1 = "E l%bD%m";
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content);
	$dynamicTag2($scope, input_content);
};
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $card_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $card_content__setup = $card_content__input_note;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
