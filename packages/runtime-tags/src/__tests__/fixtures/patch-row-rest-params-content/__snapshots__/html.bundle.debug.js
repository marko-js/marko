// tags/my-for.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/my-for.marko": "__tests__/tags/my-for.marko;b%;<!><!><!>",
	"__tests__/tags/my-for.marko_1*shell": "__tests__/tags/my-for.marko_1*shell;b%;<!><!><!>"
});
var my_for_default = _template("__tests__/tags/my-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $cg__input_to = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:args", args, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "#text/0", input.content, [...args], 1, 0, 1, $wg__input_to__OR__input_content, $scope0_reason, 0, 0, 2);
		(_filled_guard($scope0_reason, 2) && !$cg__input_to || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/my-for.marko_1_input_content#0:4_args#1/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_content", _filled_guard($scope0_reason, 1) && "args");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			args: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/my-for.marko", "1:2", { args: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/my-for.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_to ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/my-for.marko_fill0/unpatched", input.content) : $cg__input_to && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, 1);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content }, "__tests__/tags/my-for.marko", 0, { input_content: ["input.content"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_n#0:4/init!__tests__/template.marko_1",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	my_for_default({
		to: input.to,
		content: _content_resume("__tests__/template.marko_1*content", (i) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "PatchWrite:i", i);
			_html(`<button class=r>${_text_resume($scope1_id, "#text/1", n)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_subscribe($n__closures, _scope($scope1_id, {
				i,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:2", { i: "2:9" }));
		}, $scope0_id, void 0, 1)
	});
	_patch_child_end();
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/5": $n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
