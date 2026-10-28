// tags/show-value.marko
const $template = "<em> </em>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	const joined = x + input.w;
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	show_value_default({ value: joined });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.w,
		f: _write_if($scope0_reason, 1) && x,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
