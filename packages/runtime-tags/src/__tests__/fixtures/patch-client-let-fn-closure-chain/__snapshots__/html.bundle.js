// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const g = _resume((v) => f(v), "b0", $scope0_id);
	const h = _resume((v) => g(v), "b1", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "a", h(input.label))}</p>`);
	_patch_init_entry($scope0_id, "b3", _filled_guard($scope0_reason, 1) && "e");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", f, 1);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && f,
		g: $wi__input_label && g,
		h: $wi__input_label && h
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 1));
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
