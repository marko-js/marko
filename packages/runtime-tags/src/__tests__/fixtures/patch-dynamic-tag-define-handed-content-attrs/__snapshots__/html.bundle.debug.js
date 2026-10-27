// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = [["#childScope/0>"], []];
_shells({
	"__tests__/tags/one.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/one.marko_1*content;${_w0};${_w1}`)($Wrap_content__walks, $Wrap_content__template),
	"__tests__/tags/one.marko": /*@__PURE__*/ (() => `__tests__/tags/one.marko #childScope/0>;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`)()
});
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0), $cg__input_t = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Wrap = { content: _content_elide("__tests__/tags/one.marko_1*content", ({ t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__t = _write_guard($scope1_reason, 0), $wi__t = _write_if($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", input.content, { title: t }, 1, 0, 0, $wg__input_content || $wg__t, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0, 0, 0, $scope0_reason);
		$cg__input_content && _patch_write($scope1_id, "PatchMarkedWrite:t", t, !(_filled_guard($scope1_reason, 0) && $cg__input_content));
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/one.marko_1_input_content#0:3/subscribe");
		_patch_join_init($scope1_id, "__tests__/tags/one.marko_1_input_content#0:3_t#3/init", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">input_content", _filled_guard($scope1_reason, 0) && "t");
		($wi__input_content || $wi__t) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_content && $input_content__closures, _scope($scope1_id, {
			t: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && t,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/one.marko", "1:2", { t: "1:16" }), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "__tests__/tags/one.marko_1_input_content#0:3/subscribe", $wg__input_content || $wg__t);
		$wg__input_content || $wg__t || ($wi__input_content || $wi__t) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	Wrap.content({ t: input.t });
	_patch_child_end();
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/one.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 0) && $cg__input_t && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), $cg__input_t && _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	one_default({
		t: input.y,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		z,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { z: "1:6" });
}, 1);
