// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b1c");
function $setup($scope) {
	$input_type($scope["#childScope/0"], "h1");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/heading.marko
const $template = "<!><!><!>";
const $walks = "b1c";
const $setup = () => {};
_resume_dynamic_tag_var("#text/0");
const $inputtype_content = _content_resume("__tests__/tags/heading.marko_1*content", "<span>body</span>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content, () => $el);
const $el__script = _script("__tests__/tags/heading.marko_0_el#5", ($scope) => $scope.el().setAttribute("data-mounted", ""));
const $el = _var_resume("__tests__/tags/heading.marko_0_el#5/var", /*@__PURE__*/ _const("el", $el__script));
const $input_type = $dynamicTag;
const $input = ($scope, input) => $input_type($scope, input.type);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, "b1c", 0, $input);
