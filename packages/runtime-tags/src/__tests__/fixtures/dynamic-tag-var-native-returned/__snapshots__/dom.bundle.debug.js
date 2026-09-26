// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b1c";
const $setup$1 = () => {};
_dynamic_tag_var_resume("#text/0");
const $inputas_content = _content("__tests__/tags/child.marko_1*content", "child body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputas_content, () => $el);
const $el = _var_resume("__tests__/tags/child.marko_0_el#5/var", /*@__PURE__*/ _const("el", ($scope) => _return($scope, $scope.el)));
const $input_as = $dynamicTag;
const $input = ($scope, input) => $input_as($scope, input.as);
var child_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b1c", 0, $input));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b0${_w0}&b`)("b1c");
const $v__script = _script("__tests__/template.marko_0_v#2", ($scope) => $scope.v().setAttribute("data-mounted", ""));
const $v = _var_resume("__tests__/template.marko_0_v#2/var", /*@__PURE__*/ _const("v", $v__script));
function $setup($scope) {
	_var($scope, "#childScope/0", $v);
	$input_as($scope["#childScope/0"], "section");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
