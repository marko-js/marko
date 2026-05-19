// tags/child.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
function $setup$2($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/0"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2);

// tags/thing.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_what = ($scope, input_what) => $dynamicTag($scope, input_what);
const $input = ($scope, input) => $input_what($scope, input.what);
var thing_default = /* @__PURE__ */ _template("__tests__/tags/thing.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c");
const $setHtml_getter = _hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "ClosureScopes:1");
const $what_content__setHtml = _var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
const $what_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $what_content__setHtml);
	$setup$2($scope["#childScope/0"]);
};
const $what_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", $template$2, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $what_content__setup, 0, "ClosureScopes:1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const fn of $setHtml_getter($scope)) {
		fn("Hoist from custom tag");
	}
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_what($scope["#childScope/0"], attrTag({ content: $what_content($scope) }));
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
