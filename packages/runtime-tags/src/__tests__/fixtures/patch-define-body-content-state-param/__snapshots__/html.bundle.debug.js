// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/one.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/one.marko_1*content;${_w0};${_w1}`)($Wrap_content__walks, $Wrap_content__template),
	"__tests__/tags/one.marko": /*@__PURE__*/ (() => `__tests__/tags/one.marko;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`)()
});
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/tags/one.marko_1*content", ({ content, t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content__OR__t = _write_guard($scope1_reason, 0), $cg__t = _client_guard($scope1_reason, 2), $cg__content = _client_guard($scope1_reason, 1);
		_dynamic_tag($scope1_id, "#text/0", content, { title: t }, 1, 0, 0, $wg__content__OR__t, $scope1_reason, 0, 0, 1);
		$cg__t && _patch_write($scope1_id, "PatchMarkedWrite:content", content, !(_filled_guard($scope1_reason, 1) && $cg__t));
		$cg__content && _patch_write($scope1_id, "PatchMarkedWrite:t", t, !(_filled_guard($scope1_reason, 2) && $cg__content));
		_patch_init_entry($scope1_id, "__tests__/tags/one.marko_1_content#3_t#4/init", [_filled_guard($scope1_reason, 1) && "content", _filled_guard($scope1_reason, 2) && "t"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			content: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && content,
			t: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && t
		}, "__tests__/tags/one.marko", "1:2", {
			content: "1:16",
			t: "1:25"
		});
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Wrap.content({
		content: input.content,
		t: input.t
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/one.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	let s = "a";
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	one_default({
		t: s,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, 2, $scope0_reason, 0)}`);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_y#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: input.y,
		s,
		"ClosureScopes:input_y/6": _write_if($scope0_reason, 0) && $input_y__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 0));
}, 1);
