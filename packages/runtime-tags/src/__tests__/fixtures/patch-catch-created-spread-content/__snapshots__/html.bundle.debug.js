// tags/error-wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/error-wrapper.marko_2*content": "__tests__/tags/error-wrapper.marko_2*content;D ;<p> </p>",
	"__tests__/tags/error-wrapper.marko_1*content": "__tests__/tags/error-wrapper.marko_1*content !__tests__/tags/error-wrapper.marko_1_input_fallback#0:3",
	"__tests__/tags/error-wrapper.marko": "__tests__/tags/error-wrapper.marko !;b%;<!><!><!>"
});
var error_wrapper_default = _template("__tests__/tags/error-wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/init" : "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/tags/error-wrapper.marko", "4:2"), $cg__input_fail && "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, 1, 4, 0)}</b><div`);
		_attrs_content({ content: input.fallback }, "#div/1", $scope1_id, "div", 0, 1, 0, $scope0_reason, 0);
		_html(`</div>${_el_resume($scope1_id, "#div/1")}`);
		_script($scope1_id, "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/init" : "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/error-wrapper.marko", "6:4", { "EventAttributes:#div/1": ["...{ content: input.fallback }", "6:56"] }), "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/subscribe");
	}, void 0, "__tests__/tags/error-wrapper.marko_1*content", "__tests__/tags/error-wrapper.marko_2*content", 1, 1, 1);
	_scope($scope0_id, {
		input_fallback: input.fallback,
		"ClosureScopes:input_fallback/5": _write_if($scope0_reason, 0) && $input_fallback__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/tags/error-wrapper.marko", 0, { input_fallback: ["input.fallback"] }) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/error-wrapper.marko_fill0", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_count#0:7/init",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/1", count, 2)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_1_input_label#0:6/init" : "__tests__/template.marko_1_input_label#0:6/subscribe");
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4")));
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:count/9": $count__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
