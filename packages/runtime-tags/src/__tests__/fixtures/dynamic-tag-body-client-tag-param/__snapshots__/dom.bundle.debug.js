// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $inputtag_content__input_note = /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/tags/child.marko_1_input_note#0:4/subscribe");
const $inputtag_content__setup = $inputtag_content__input_note;
const $inputtag_content = _content("__tests__/tags/child.marko_1*content", " ", " ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_note$1($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputtag_content__input_note);
const $input_note$1 = /*@__PURE__*/ _const("input_note", $input_note__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $tag = /*@__PURE__*/ _let("tag/5", ($scope) => $input_tag($scope["#childScope/1"], $scope.tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tag($scope, $scope.tag === "b" ? "i" : "b");
}));
function $setup($scope) {
	$tag($scope, "b");
	$setup__script($scope);
}
const $input_note = ($scope, input_note) => $input_note$1($scope["#childScope/1"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
