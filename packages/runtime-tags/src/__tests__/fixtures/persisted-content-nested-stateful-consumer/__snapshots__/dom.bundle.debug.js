// tags/grand/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand/index.marko", $template$2, "D%l", 0, $input$2);

// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!><button>+</button></section>";
const $walks$1 = "E l%b l";
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card/index.marko0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_content$1($scope["#childScope/0"], $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card/index.marko1", "open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card/index.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card/index.marko0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note)), 0);
const $card_content__setup = $card_content__input_note;
const $card_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
