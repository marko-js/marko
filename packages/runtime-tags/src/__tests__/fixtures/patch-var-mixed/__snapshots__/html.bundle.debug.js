// tags/mixer/index.marko
const $template$1 = "<button>bump</button>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/mixer/index.marko_0"]];
_shells({ "__tests__/tags/mixer/index.marko": "^__tests__/tags/mixer/index.marko !__tests__/tags/mixer/index.marko_0; ;<button>bump</button>" });
_stateful_return("__tests__/tags/mixer/index.marko");
var mixer_default = _template("__tests__/tags/mixer/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let local = 0;
	_html(`<button>bump</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = input.value + local;
	_script($scope0_id, "__tests__/tags/mixer/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/mixer/index.marko_fill1", local, 1);
	_scope($scope0_id, {
		input_value: input.value,
		local
	}, "__tests__/tags/mixer/index.marko", 0, {
		input_value: ["input.value"],
		local: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/mixer/index.marko_fill0", input.value, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&D m`)(" b")};${((_w0) => `<main>${_w0}<p> </p></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let v = mixer_default({ value: input.n });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#6/var");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", v)}</p></main>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
