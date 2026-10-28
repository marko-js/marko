// tags/echo/index.marko
const $template = "<em> </em>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<em> </em>" });
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.cfg.label, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("D l")};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	echo_default({ cfg: _patch_live($childScope, { label: input.label }, $scope0_id, "d") });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
