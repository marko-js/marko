// tags/disclosure.marko
const $template$1 = "<!><!><button>toggle</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/disclosure.marko_0"]];
_shells({ "__tests__/tags/disclosure.marko": "__tests__/tags/disclosure.marko !__tests__/tags/disclosure.marko_0;b%b ;<!><!><button>toggle</button>" });
var disclosure_default = _template("__tests__/tags/disclosure.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/disclosure.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/disclosure.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/disclosure.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/disclosure.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/disclosure.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/disclosure.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_suffix = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	disclosure_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.suffix, 1, $scope0_reason, 0)}</em>`);
		$cg__input_suffix && _patch_render($scope1_id, "__tests__/template.marko_1_input_suffix#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_suffix && "__tests__/template.marko_1_input_suffix#0:3/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_suffix: input.suffix,
		"ClosureScopes:input_suffix/4": _write_if($scope0_reason, 0) && $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_suffix: ["input.suffix"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_suffix#3/subscribers", "input_suffix");
}, 1);
