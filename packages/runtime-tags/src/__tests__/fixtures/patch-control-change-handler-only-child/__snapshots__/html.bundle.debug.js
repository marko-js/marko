// tags/child.marko
const $template$1 = "<p> </p><input><span> </span>";
const $walks$1 = "D l bD l";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;D l bD ;<p> </p><input><span> </span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "#input/1", void 0, _resume(function(v) {
		count += v.length;
	}, "__tests__/tags/child.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/1")}<span>${_text_resume($scope0_id, "#text/2", count)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/tags/child.marko", 0, {
		count: "1:6",
		"ControlledHandler:#input/1": ["valueChange", "3:8"]
	});
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
