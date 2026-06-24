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
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2);

// tags/thing.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $dynamicTag2$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = ($scope, input_content) => {
	$dynamicTag$1($scope, input_content);
	$dynamicTag2$1($scope, input_content);
};
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var thing_default = /*@__PURE__*/ _template("__tests__/tags/thing.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b%c`)($walks$1);
const $setHtml3_getter = _hoist("setHtml3", "ClosureScopes:4");
const $inputshowsectionnull_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $inputshowsectionnull_content__setHtml);
const $inputshowsectionnull_content__setHtml = _var_resume("__tests__/template.marko_4_setHtml3/var", /*@__PURE__*/ _const("setHtml3", ($scope) => _assert_hoist($scope.setHtml3)));
const $inputshowsectionnull_content__setup = ($scope) => $inputshowsectionnull_content__dynamicTag($scope, 1 && child_default);
const $inputshowsectionnull_content = _content_resume("__tests__/template.marko_4_content", "<!><!><!>", "b1c", $inputshowsectionnull_content__setup, 0, "ClosureScopes:4");
const $setHtml2_getter = _hoist("setHtml2", "ClosureScopes:3", "ClosureScopes:2");
const $thing_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $thing_content2__setHtml);
const $thing_content2__setHtml = _var_resume("__tests__/template.marko_3_setHtml2/var", /*@__PURE__*/ _const("setHtml2", ($scope) => _assert_hoist($scope.setHtml2)));
const $thing_content2__setup = ($scope) => $thing_content2__dynamicTag($scope, 1 && child_default);
const $thing_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<!><!><!>", "b1c", $thing_content2__setup, 0, "ClosureScopes:3");
const $inputshowThingnull_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $thing_content2($scope));
};
const $inputshowThingnull_content = _content_resume("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $inputshowThingnull_content__setup, 0, "ClosureScopes:2");
const $setHtml_getter = _hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "ClosureScopes:1");
const $thing_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $thing_content__setHtml);
const $thing_content__setHtml = _var_resume("__tests__/template.marko_1_setHtml/var", /*@__PURE__*/ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
const $thing_content__setup = ($scope) => $thing_content__dynamicTag($scope, 1 && child_default);
const $thing_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<!><!><!>", "b1c", $thing_content__setup, 0, "ClosureScopes:1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const fn of $setHtml_getter($scope)) {
		fn("Hoist from custom tag");
	}
	$setHtml2_getter($scope)()("Hoist from dynamic tag");
	$setHtml3_getter($scope)()("Hoist from dynamic tag");
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $thing_content($scope));
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputshowThingnull_content);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", $inputshowsectionnull_content);
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show ? thing_default : null);
	$dynamicTag2($scope, input_show ? "section" : null);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
