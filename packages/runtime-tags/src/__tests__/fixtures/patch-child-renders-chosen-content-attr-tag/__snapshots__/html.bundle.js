// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_slot_renderer__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_slot_renderer__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_slot_renderer = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.slot.renderer, { label: input.label }, 1, 0, 0, $wg__input_slot_renderer__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_slot_renderer ? " e" : "") + ($fg__input_label ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && $ui__input_slot_renderer__OR__input_label && input.slot?.renderer,
		f: _write_if($scope0_reason, 1) && $ui__input_slot_renderer__OR__input_label && input.label
	}) || ($fg__input_slot_renderer && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.slot?.renderer, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;D ;<b> </b>",
	a0: "a0;D ;<em> </em>",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", label, 1, 4, 0)}</em>`);
		_scope($scope1_id, {});
	}, $scope0_id, void 0, 1) };
	const B = { content: _content_resume("a1", ({ label }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<b>${_text_mark($scope2_id, "a", label, 1, 4, 0)}</b>`);
		_scope($scope2_id, {});
	}, $scope0_id, void 0, 1) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		label: input.label,
		slot: attrTag({ renderer: input.a ? A : B })
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: $ui__input_a && A,
		g: $ui__input_a && B,
		a: _existing_scope($childScope)
	});
}, 1);
