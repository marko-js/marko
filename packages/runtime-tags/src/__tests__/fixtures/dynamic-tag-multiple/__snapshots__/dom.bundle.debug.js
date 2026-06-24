// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
_resume_dynamic_tag();
const $inputAsdiv_content = _content_resume("__tests__/tags/wrapper.marko_1_content", "hi", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputAsdiv_content);
const $input_as__OR__htmlInput = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.inputAs || "div", () => $scope.htmlInput));
const $inputAs = /*@__PURE__*/ _const("inputAs", $input_as__OR__htmlInput);
const $htmlInput = /*@__PURE__*/ _const("htmlInput", $input_as__OR__htmlInput);
const $input = ($scope, input) => {
	(({ as, ...htmlInput }) => $htmlInput($scope, htmlInput))(input);
	$inputAs($scope, input.as);
};
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<div>${_w0}</div><div>${_w1}</div><div>${_w2}</div><div>${_w3}</div>`)($template$1, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D/${_w0}&lD/${_w1}&lD/${_w2}&lD/${_w3}&l`)("b%c", "b%c", "b%c", "b%c");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$inputAs($scope["#childScope/0"]);
	$htmlInput($scope["#childScope/0"], {});
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$inputAs($scope["#childScope/1"]);
	$htmlInput($scope["#childScope/1"], {});
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$inputAs($scope["#childScope/2"]);
	$htmlInput($scope["#childScope/2"], {});
	/* @__PURE__ */ $setup$1($scope["#childScope/3"]);
	$inputAs($scope["#childScope/3"]);
	$htmlInput($scope["#childScope/3"], {});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
