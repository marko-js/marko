// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b1c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, () => $r);
const $r = _var_resume("__tests__/tags/child.marko_0_r/var", /* @__PURE__ */ _const("r", ($scope) => _return($scope, $scope.r)));
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b1c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<div> </div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b0${_w0}&D l`)("b1c");
const $child_content__x = /* @__PURE__ */ _closure_get("x", ($scope) => _text($scope["#text/0"], _assert_init($scope._, "x")));
const $child_content__setup = ($scope) => {
	$child_content__x($scope);
	_return($scope, 1);
};
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<span> </span>", "D l", $child_content__setup);
const $x__closure = /* @__PURE__ */ _closure($child_content__x);
const $x = _var_resume("__tests__/template.marko_0_x/var", /* @__PURE__ */ _const("x", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$x__closure($scope);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $x);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
