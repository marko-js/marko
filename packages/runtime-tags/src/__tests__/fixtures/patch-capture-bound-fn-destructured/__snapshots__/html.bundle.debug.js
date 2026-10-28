// tags/child.marko
const $template$1 = "<button><!>: <!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0; D%c%;<button><!>: <!></button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shown = "none";
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 1)}: ${_text_resume($scope0_id, "#text/2", shown, 2, 0, 0, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, { fn: input.fn }, "__tests__/tags/child.marko", 0, { fn: "1:10" }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		fn: _bind_resume(() => input.label, "__tests__/template.marko_0/fn", $scope0_id),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_label: input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
