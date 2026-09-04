// tags/card/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card/index.marko0", "input_content", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_content)));
const $for_content__setup = $for_content__input_content;
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_count$1 = ($scope, input_count) => $for($scope, [input_count]);
const $input$1 = ($scope, input) => {
	$input_count$1($scope, input.count);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card/index.marko0", "input_content", $for_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $card_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $card_content__setup = $card_content__input_note;
const $card_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_count = ($scope, input_count) => $input_count$1($scope["#childScope/0"], input_count);
const $input = ($scope, input) => {
	$input_count($scope, input.count);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
