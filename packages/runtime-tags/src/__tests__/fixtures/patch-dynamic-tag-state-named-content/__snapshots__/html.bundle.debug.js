// tags/keep.marko
const $template$1 = "<button class=reset>reset</button><div><!></div>";
const $walks$1 = " bD%l";
const $setup$1 = [[], ["__tests__/tags/keep.marko_0"]];
_shells({ "__tests__/tags/keep.marko": "__tests__/tags/keep.marko !__tests__/tags/keep.marko_0; bD%;<button class=reset>reset</button><div><!></div>" });
var keep_default = _template("__tests__/tags/keep.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_html("</div>");
	_script($scope0_id, "__tests__/tags/keep.marko_0");
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/keep.marko", 0, { input_content: ["input.content"] }) || (_content_withhold(input.content), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_content", input.content, !_server_guard($scope0_reason, 0)));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_for_of(input.bs, (b) => {
		const $scope1_id = _scope_id();
		const $for_content__b__closures = new Set();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", b);
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		keep_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_text_resume($scope2_id, "#text/0", b, void 0, $scope0_reason, 0)}:${_text_resume($scope2_id, "#text/1", input.note, 2, $scope0_reason, 1)}`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_2_input_note#0:4/init" : "__tests__/template.marko_2_input_note#0:4/subscribe");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_2_b#1:2/init" : "__tests__/template.marko_2_b#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4")));
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			b,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:b/6": _write_if($scope0_reason, 0) && $for_content__b__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { b: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 1) && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
}, 1);
