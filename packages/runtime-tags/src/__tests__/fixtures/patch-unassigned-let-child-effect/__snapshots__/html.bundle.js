// tags/child.marko
const $template = "<p><!><!></p>";
const $walks = "D%b%l";
const $setup$1 = [[], []];
_shells({ b: "b;D%b%;<p><!><!></p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.v, 1, $scope0_reason, 0)}${_text_resume($scope0_id, "b", input.w, 2, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "e");
	_scope($scope0_id, { e: input.v }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		v: x,
		w: input.w
	});
	_patch_child_end();
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va0", x, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
