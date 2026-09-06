// tags/grand/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand/index.marko", $template$2, "D%l", 0, $input$2);

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $child_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $child_content__setup = $child_content__input_note;
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $child_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $child_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($child_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
