// tags/child.marko
const $template = "<button><!>: <!></button>";
const $walks = " D%c%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>: <!></button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}: ${_text_resume($scope0_id, "c", "none", 2, 0, 0, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default(_patch_live($childScope, {
		fn: _bind_resume(() => input.label, "a0", $scope0_id),
		label: input.label
	}, $scope0_id, "d"));
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		a: _existing_scope($childScope)
	});
}, 1);
