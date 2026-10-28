// tags/child.marko
const $template = "<p> </p><input><span> </span>";
const $walks = "D l bD l";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1;D l bD ;<p> </p><input><span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "b", void 0, _resume(function(v) {
		count += v.length;
	}, "b0", $scope0_id))}>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", count)}</span>`);
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb2", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
