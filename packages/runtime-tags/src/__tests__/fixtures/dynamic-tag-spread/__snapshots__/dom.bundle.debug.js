// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
_resume_dynamic_tag();
const $inputAsdiv_content = _content_resume("__tests__/tags/wrapper.marko_1_content", "hi", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputAsdiv_content);
const $input_as__OR__input_foo__OR__htmlInput = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.inputAs || "div", () => ({
	...$scope.htmlInput,
	"data-foo": $scope.foo
})), 2);
const $inputAs = /*@__PURE__*/ _const("inputAs", $input_as__OR__input_foo__OR__htmlInput);
const $foo = /*@__PURE__*/ _const("foo", $input_as__OR__input_foo__OR__htmlInput);
const $htmlInput = /*@__PURE__*/ _const("htmlInput", $input_as__OR__input_foo__OR__htmlInput);
const $input = ($scope, input) => {
	(({ as, foo, ...htmlInput }) => $htmlInput($scope, htmlInput))(input);
	$inputAs($scope, input.as);
	$foo($scope, input.foo);
};
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div>${_w0}</div><div>${_w1}</div>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&lD/${_w1}&l`)("b%c", "b%c");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { id: "foo" });
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$foo($scope["#childScope/1"], "bar");
	const $wrapper_input_spread = { id: "foo" };
	$inputAs($scope["#childScope/1"], $wrapper_input_spread.as);
	$htmlInput($scope["#childScope/1"], (({ as, foo, ...htmlInput }) => htmlInput)($wrapper_input_spread));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
