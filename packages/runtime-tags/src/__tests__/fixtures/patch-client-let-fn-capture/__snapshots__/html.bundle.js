// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<p>${_text_mark($scope0_id, "a", f(input.label))}</p>`);
	_patch_render($scope0_id, "b0", $fg__input_label && "e");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", f, 1);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && f
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.prefix, !_server_guard($scope0_reason, 0));
	const fn = _bind_resume((v) => input.prefix + v, "a0", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: fn,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		d: input.prefix,
		a: _existing_scope($childScope)
	});
}, 1);
