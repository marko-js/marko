// tags/outer.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = [[], []];
_shells({ b: "b !;b%b%;<!><!><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_dynamic_tag($scope0_id, "a", T, { title: input.label });
	_dynamic_tag($scope0_id, "b", T, { title: input.label }, 8);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", T, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 1) && T
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
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
