// tags/my-tag.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_resume_dynamic_tag();
const $startContent_content = /* @__PURE__ */ _content("__tests__/tags/my-tag.marko_1_content", "default", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_as__OR__input_class__OR__htmlInput__OR__content = /* @__PURE__ */ _or(9, ($scope) => $dynamicTag($scope, $scope.inputAs || "div", () => ({
	...$scope.htmlInput,
	class: ["foo", $scope.inputClass],
	content: $scope.content
})), 3);
const $content = /* @__PURE__ */ _let("content/8", $input_as__OR__input_class__OR__htmlInput__OR__content);
const $startContent = ($scope, startContent) => $content($scope, startContent);
function $setup$1($scope) {
	$startContent($scope, { content: $startContent_content($scope) });
}
const $inputAs = /* @__PURE__ */ _const("inputAs", $input_as__OR__input_class__OR__htmlInput__OR__content);
const $inputClass = /* @__PURE__ */ _const("inputClass", $input_as__OR__input_class__OR__htmlInput__OR__content);
const $htmlInput = /* @__PURE__ */ _const("htmlInput", $input_as__OR__input_class__OR__htmlInput__OR__content);
const $inputContent__script = _script("__tests__/tags/my-tag.marko_0_inputContent", ($scope) => $content($scope, $scope.inputContent));
const $inputContent = /* @__PURE__ */ _const("inputContent", $inputContent__script);
const $input = ($scope, input) => {
	(({ as, class: $class, content, ...htmlInput }) => $htmlInput($scope, htmlInput))(input);
	$inputAs($scope, input.as);
	$inputClass($scope, input.class);
	$inputContent($scope, input.content);
};
var my_tag_default = /* @__PURE__ */ _template("__tests__/tags/my-tag.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $mytag_content2 = _content_resume("__tests__/template.marko_2_content", "Span", "b");
const $mytag_content = _content_resume("__tests__/template.marko_1_content", "Div", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$inputContent($scope["#childScope/0"], $mytag_content($scope));
	$inputAs($scope["#childScope/0"]);
	$inputClass($scope["#childScope/0"]);
	$htmlInput($scope["#childScope/0"], {});
	$setup$1($scope["#childScope/1"]);
	$inputContent($scope["#childScope/1"], $mytag_content2($scope));
	$inputAs($scope["#childScope/1"], "span");
	$inputClass($scope["#childScope/1"]);
	$htmlInput($scope["#childScope/1"], {});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
