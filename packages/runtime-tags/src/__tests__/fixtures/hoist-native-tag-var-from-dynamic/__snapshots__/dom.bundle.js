// total: 13186 (min) 5060 (brotli)
// tags/child.marko: 0 (min) 1 (brotli)
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag(1);
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content);
	$dynamicTag2($scope, input_content);
};

// template.marko: 576 (min) 291 (brotli)
const $el3_getter = _hoist(0, "B4");
const $inputshowsectionnull_content = _content_resume("a7", "<p></p>", " b", 0, 0, "B4");
const $inputshowChildnull_content__$el2_getter = _hoist_resume("a1", 0, "B3");
const $el2_getter = _hoist_resume("a2", 0, "B3", "B2");
const $child_content2 = /* @__PURE__ */ _content("a4", "<div></div>", " b", 0, 0, "B3");
const $inputshowChildnull_content__setup__script = _script("a6", ($scope) => {
	for (const el of $inputshowChildnull_content__$el2_getter($scope)) el.classList.add("inner");
});
const $inputshowChildnull_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
	$input_content($scope.a, $child_content2($scope));
	$inputshowChildnull_content__setup__script($scope);
};
const $inputshowChildnull_content = _content_resume("a5", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks), $inputshowChildnull_content__setup, 0, "B2");
const $el_getter = _hoist_resume("a0", 0, "B1");
const $setup__script = _script("a8", ($scope) => {
	for (const el of $el_getter($scope)) el.innerHTML = "Hoist from custom tag";
	for (const el of $el2_getter($scope)) el.classList.add("outer");
	{
		const el = $el3_getter($scope)();
		if (el) el.innerHTML = "Hoist from dynamic tag";
	}
});
