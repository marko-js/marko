// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span>done</span>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $placeholder_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $placeholder_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $placeholder_content__dynamicTag($scope, $scope._.input_content));
const $placeholder_content__setup = $placeholder_content__input_content;
const $placeholder_content = _content_resume("__tests__/tags/card/index.marko_1*content", "<!><!><!>", "b%", $placeholder_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup$1($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_promise$1($scope, input.promise);
};
const $input_content__closure = /*@__PURE__*/ _closure($placeholder_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise$1 = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
const $card_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $card_content__setup = $card_content__input_note;
const $card_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_promise = ($scope, input_promise) => $input_promise$1($scope["#childScope/0"], input_promise);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
