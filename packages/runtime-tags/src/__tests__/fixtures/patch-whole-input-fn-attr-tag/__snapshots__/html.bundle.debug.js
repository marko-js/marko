// tags/reader.marko
const $template$1 = "<button>read</button>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/reader.marko_0"]];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko !__tests__/tags/reader.marko_0; ;<button>read</button>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/reader.marko", 0, { input: 0 }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)(" b")};${((_w0) => `${_w0}<p> </p>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	let shown = "";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	reader_default(_patch_live($childScope, {
		read: _bind_resume(() => input.label, "__tests__/template.marko_0/read", $scope0_id),
		onRead: _resume(function(v) {
			shown = v;
		}, "__tests__/template.marko_0/onRead", $scope0_id),
		opt: attrTag({ v: input.label })
	}, $scope0_id, "input_label"));
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", shown)}</p>`);
	_scope($scope0_id, {
		input_label: input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
