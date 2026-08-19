// tags/grand/index.marko
const $template$2 = "<div><!><button>+</button></div>";
const $walks$2 = "D%b l";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/grand/index.marko0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/grand/index.marko1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/grand/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/grand/index.marko0", "input_content", $if_content__input_content);
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$2);
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
function $setup$1($scope) {
	$setup$2($scope["#childScope/1"]);
}
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $child_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note)), 0);
const $child_content__setup = $child_content__input_note;
const $child_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $child_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($child_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
