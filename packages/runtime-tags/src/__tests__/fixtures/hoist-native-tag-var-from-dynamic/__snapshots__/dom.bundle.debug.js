// tags/child.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $dynamicTag$1 = /* @__PURE__ */ _dynamic_tag("#text/0");
const $dynamicTag2$1 = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_content = ($scope, input_content) => {
	$dynamicTag$1($scope, input_content);
	$dynamicTag2$1($scope, input_content);
};
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!><!><!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&%b%c`)($walks$1);
const $el3_getter = /* @__PURE__ */ _hoist("#p/0", "ClosureScopes:4");
const $inputshowsectionnull_content = _content_resume("__tests__/template.marko_4_content", "<p></p>", " b", 0, 0, "ClosureScopes:4");
const $inputshowChildnull_content__$el2_getter = _hoist_resume("__tests__/template.marko_2_#div/hoist", "#div/0", "ClosureScopes:3");
const $el2_getter = _hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/0", "ClosureScopes:3", "ClosureScopes:2");
const $child_content2 = /* @__PURE__ */ _content("__tests__/template.marko_3_content", "<div></div>", " b", 0, 0, "ClosureScopes:3");
const $inputshowChildnull_content__setup__script = _script("__tests__/template.marko_2", ($scope) => {
	for (const el of $inputshowChildnull_content__$el2_getter($scope)) {
		el.classList.add("inner");
	}
});
const $inputshowChildnull_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content2($scope));
	$inputshowChildnull_content__setup__script($scope);
};
const $inputshowChildnull_content = _content_resume("__tests__/template.marko_2_content", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks$1), $inputshowChildnull_content__setup, 0, "ClosureScopes:2");
const $el_getter = _hoist_resume("__tests__/template.marko_0_#span/hoist", "#span/0", "ClosureScopes:1");
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<span></span>", " b", 0, 0, "ClosureScopes:1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const el of $el_getter($scope)) {
		el.innerHTML = "Hoist from custom tag";
	}
	for (const el of $el2_getter($scope)) {
		el.classList.add("outer");
	}
	{
		const el = $el3_getter($scope)();
		if (el) {
			el.innerHTML = "Hoist from dynamic tag";
		}
	}
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
	$setup__script($scope);
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1", $inputshowChildnull_content);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/2", $inputshowsectionnull_content);
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show ? child_default : null);
	$dynamicTag2($scope, input_show ? "section" : null);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
