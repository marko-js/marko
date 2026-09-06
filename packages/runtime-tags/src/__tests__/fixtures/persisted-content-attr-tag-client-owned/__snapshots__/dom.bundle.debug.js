// tags/card/index.marko
const $template$1 = "<section><!><button>+</button></section>";
const $walks$1 = "D%b l";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_header = /*@__PURE__*/ _fill_join("__tests__/tags/card/index.marko0", "input_header", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_header)));
const $if_content__setup = $if_content__input_header;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card/index.marko1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_header($scope, input.header);
const $input_header = /*@__PURE__*/ _fill_const("__tests__/tags/card/index.marko0", "input_header", $if_content__input_header);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $header_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note)), 0);
const $header_content__setup = $header_content__input_note;
const $header_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $header_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_header($scope["#childScope/0"], attrTag({ content: $header_content($scope) }));
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note__closure = /*@__PURE__*/ _closure($header_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
