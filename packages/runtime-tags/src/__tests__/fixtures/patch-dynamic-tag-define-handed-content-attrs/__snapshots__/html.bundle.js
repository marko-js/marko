// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)($Wrap_content__walks, $Wrap_content__template),
	b: /*@__PURE__*/ (() => `b a>;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`)()
});
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0), $cg__input_t = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content_elide("b0", ({ t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__t = _write_guard($scope1_reason, 0), $wi__t = _write_if($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", input.content, { title: t }, 1, 0, 0, $wg__input_content || $wg__t, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0, 0, 0, $scope0_reason);
		$cg__input_content && _patch_write($scope1_id, "xd", t, !(_filled_guard($scope1_reason, 0) && $cg__input_content));
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "b1");
		_patch_join_init($scope1_id, "b2", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">d", _filled_guard($scope1_reason, 0) && "d");
		($wi__input_content || $wi__t) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_content && $input_content__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && t,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "b1", $wg__input_content || $wg__t);
		$wg__input_content || $wg__t || ($wi__input_content || $wi__t) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "a", 1);
	Wrap.content({ t: input.t });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content,
		f: $wi__input_content && $input_content__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && $cg__input_t && _patch_fill($scope0_id, "vb3", input.content, !_server_guard($scope0_reason, 0)), $cg__input_t && _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "b", 0);
	one_default({
		t: input.y,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: z,
		b: _existing_scope($childScope)
	});
}, 1);
