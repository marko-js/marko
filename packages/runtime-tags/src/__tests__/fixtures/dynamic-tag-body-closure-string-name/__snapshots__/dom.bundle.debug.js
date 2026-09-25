// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputasdiv_content__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/0"], $scope._.input_text), 0, "__tests__/tags/heading.marko_1_input_text#4/subscribe");
const $inputasdiv_content__setup = $inputasdiv_content__input_text;
const $inputasdiv_content = _content("__tests__/tags/heading.marko_1*content", " ", " ", $inputasdiv_content__setup);
_content_resume($inputasdiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputasdiv_content);
const $input_as = ($scope, input_as) => $dynamicTag($scope, input_as || "div");
const $input = ($scope, input) => {
	$input_as($scope, input.as);
	$input_text($scope, input.text);
};
const $input_text__closure = /*@__PURE__*/ _closure($inputasdiv_content__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_as($scope["#childScope/0"], "h2");
	$input_text($scope["#childScope/0"], "Hello");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
