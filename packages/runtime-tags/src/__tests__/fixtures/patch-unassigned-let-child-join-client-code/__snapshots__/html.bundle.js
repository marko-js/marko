// tags/child.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	_html(`<p>${_text_resume($scope0_id, "a", uid + "-" + input.name)}</p>`);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", uid, 1);
	_scope($scope0_id, {
		e: input.name,
		f: _write_if($scope0_reason, 1) && uid
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.name, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D l")};${((_w0) => `${_w0}<button> </button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		id: input.id,
		name: input.name
	});
	_patch_child_end();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope)
	});
}, 1);
