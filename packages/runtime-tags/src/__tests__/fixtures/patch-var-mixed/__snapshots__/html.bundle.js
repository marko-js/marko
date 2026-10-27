// tags/mixer/index.marko
const $template = "<button>bump</button>";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; ;<button>bump</button>" });
_stateful_return("b");
var mixer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let local = 0;
	_html(`<button>bump</button>${_el_resume($scope0_id, "a")}`);
	const $return = input.value + local;
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", local, 1);
	_scope($scope0_id, {
		d: input.value,
		e: local
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.value, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&D m`)(" b")};${((_w0) => `<main>${_w0}<p> </p></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let v = mixer_default({ value: input.n });
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", v)}</p></main>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
