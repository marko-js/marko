// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [["b1"], []];
_shells({ b: "b b1;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let fns = { f: input.fmt };
	_html(`<p>${_text_resume($scope0_id, "a", fns.f(input.label))}</p>`);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wf", fns, 1);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && fns
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D l")};${((_w0) => `${_w0}<button> </button>`)($template)}`)() });
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
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: x,
		a: _existing_scope($childScope)
	});
}, 1);
