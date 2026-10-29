// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const obj2 = { obj: { f } };
	_html(`<p>${_text_resume($scope0_id, "a", obj2.obj.f(input.label))}</p>`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", f, 1);
	_scope($scope0_id, {
		e: input.label,
		i: _write_if($scope0_reason, 1) && obj2.obj
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: fn,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
