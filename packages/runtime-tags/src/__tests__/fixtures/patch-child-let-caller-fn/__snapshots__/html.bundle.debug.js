// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [["__tests__/tags/outer.marko_0_input_label#4_fns#5/init"], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko __tests__/tags/outer.marko_0_input_label#4_fns#5/init;D ;<p> </p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let fns = { f: input.fmt };
	_html(`<p>${_text_resume($scope0_id, "#text/0", fns.f(input.label))}</p>`);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:fns", fns, 1);
	_scope($scope0_id, {
		input_label: input.label,
		fns: _write_if($scope0_reason, 1) && fns
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		fns: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D l")};${((_w0) => `${_w0}<button> </button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: fn,
		label: input.label
	});
	_patch_child_end();
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/2", x)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "3:6" });
}, 1);
