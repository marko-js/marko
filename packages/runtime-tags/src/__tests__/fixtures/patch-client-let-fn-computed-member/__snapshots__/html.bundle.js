// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [["b2"], []];
_shells({ b: "b b2;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let obj = input.fmt;
	const k = "f";
	_html(`<p>${_text_resume($scope0_id, "a", obj[k](input.label))}</p>`);
	_patch_write($scope0_id, "wg", k, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", obj, 1);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && obj,
		g: k
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: _patch_live($childScope, {
			f: fn,
			n: input.n
		}, $scope0_id, "d"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && fn,
		a: _existing_scope($childScope)
	});
}, 1);
