// tags/thing.marko
const $template$2 = "<!><!><!><!>";
const $walks$2 = "b%b%c";
const $setup$2 = () => {};
const $dynamicTag$1 = /* @__PURE__ */ _dynamic_tag("#text/0");
const $dynamicTag2$1 = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_content = ($scope, input_content) => {
	$dynamicTag$1($scope, input_content);
	$dynamicTag2$1($scope, input_content);
};
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var thing_default = /* @__PURE__ */ _template("__tests__/tags/thing.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
function $setup$1($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/0"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!><!><!>`)($template$2);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&%b%c`)($walks$2);
const $setHtml3_getter = _hoist("setHtml3", "ClosureScopes:4");
const $inputshowsectionnull_content__setHtml = _var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */ _const("setHtml3", ($scope) => _assert_hoist($scope.setHtml3)));
const $inputshowsectionnull_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $inputshowsectionnull_content__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $inputshowsectionnull_content = _content_resume("__tests__/template.marko_4_content", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $inputshowsectionnull_content__setup, 0, "ClosureScopes:4");
const $setHtml2_getter = _hoist("setHtml2", "ClosureScopes:3", "ClosureScopes:2");
const $thing_content2__setHtml = _var_resume("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */ _const("setHtml2", ($scope) => _assert_hoist($scope.setHtml2)));
const $thing_content2__setup = ($scope) => {
	_var($scope, "#childScope/0", $thing_content2__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $thing_content2 = /* @__PURE__ */ _content("__tests__/template.marko_3_content", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $thing_content2__setup, 0, "ClosureScopes:3");
const $inputshowThingnull_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $thing_content2($scope));
};
const $inputshowThingnull_content = _content_resume("__tests__/template.marko_2_content", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$2), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks$2), $inputshowThingnull_content__setup, 0, "ClosureScopes:2");
const $setHtml_getter = _hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "ClosureScopes:1");
const $thing_content__setHtml = _var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
const $thing_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $thing_content__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $thing_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $thing_content__setup, 0, "ClosureScopes:1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const fn of $setHtml_getter($scope)) {
		fn("Hoist from custom tag");
	}
	$setHtml2_getter($scope)()("Hoist from dynamic tag");
	$setHtml3_getter($scope)()("Hoist from dynamic tag");
});
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $thing_content($scope));
	$setup__script($scope);
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1", $inputshowThingnull_content);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/2", $inputshowsectionnull_content);
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show ? thing_default : null);
	$dynamicTag2($scope, input_show ? "section" : null);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
