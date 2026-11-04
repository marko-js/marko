// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = [[], []];
_shells({
	b0: `b0;${$Wrap_content__walks};${$Wrap_content__template}`,
	b: `b;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`
});
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("b0", ({ content, t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content__OR__t = _write_guard($scope1_reason, 0), $fg__content = _filled_guard($scope1_reason, 1), $fg__t = _filled_guard($scope1_reason, 2);
		_dynamic_tag($scope1_id, "a", content, { title: t }, 1, 0, 0, $wg__content__OR__t, $scope1_reason, 0, 0, 1);
		_patch_render($scope1_id, "b1", [$fg__content && "d", $fg__t && "e"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && content,
			e: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && t
		}) || ($fg__content && _unfilled_if($scope1_reason, 2) && _patch_write($scope1_id, "xd", content, !_server_guard($scope1_reason, 1)), $fg__t && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "xe", t, !_server_guard($scope1_reason, 2)));
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Wrap.content({
		content: input.content,
		t: input.t
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_y = _client_guard($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let s = "a";
	_html(`<button class=s>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	one_default({
		t: s,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.y, 2, $scope0_reason, 0)}`);
			$cg__input_y && _patch_render($scope1_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_y && "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a2");
	$fg__input_y && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: input.y,
		f: s,
		g: _write_if($scope0_reason, 0) && $input_y__closures,
		b: _existing_scope($childScope)
	}) || $fg__input_y && _patch_write($scope0_id, "xe", input.y, !_server_guard($scope0_reason, 0));
}, 1);
