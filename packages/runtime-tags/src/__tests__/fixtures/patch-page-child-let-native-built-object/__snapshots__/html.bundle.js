// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let T = input.tag;
	const obj = { T };
	_dynamic_tag($scope0_id, "a", obj.T, { title: input.label }, 0, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.label, $wg__input_label));
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id));
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", T, 1);
	_scope($scope0_id, {
		e: input.label,
		h: $wi__input_label && obj.T,
		j: $wi__input_label && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		tag: input.tag,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
