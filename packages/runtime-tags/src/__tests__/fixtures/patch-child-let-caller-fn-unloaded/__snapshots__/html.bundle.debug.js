// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;D ;<p> </p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let fns = { f: input.fmt };
	_html(`<p>${_text_mark($scope0_id, "#text/0", fns.f(input.label))}</p>`);
	_patch_render($scope0_id, "__tests__/tags/outer.marko_0_input_label#4_fns#5/setup", $fg__input_label && "input_label");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_0_fns#5/fill", fns, 1);
	_scope($scope0_id, {
		input_label: input.label,
		fns: _write_if($scope0_reason, 1) && fns
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		fns: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: fn,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
