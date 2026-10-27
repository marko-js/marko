// tags/disclosure.marko
const $template$1 = "<!><!><button>toggle</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/disclosure.marko_0"]];
_shells({ "__tests__/tags/disclosure.marko": "__tests__/tags/disclosure.marko !__tests__/tags/disclosure.marko_0;b%b ;<!><!><button>toggle</button>" });
var disclosure_default = _template("__tests__/tags/disclosure.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/disclosure.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/disclosure.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/disclosure.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/disclosure.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/disclosure.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	disclosure_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.suffix, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_suffix#0:3/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_suffix: input.suffix,
		"ClosureScopes:input_suffix/4": _write_if($scope0_reason, 0) && $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_suffix: ["input.suffix"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
