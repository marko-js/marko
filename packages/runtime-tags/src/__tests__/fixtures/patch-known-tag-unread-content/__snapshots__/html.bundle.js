// tags/static-child.marko
const $template = "<span>static</span>";
const $setup$1 = [[], []];
_shells({ b: "b,<span>static</span>" });
var static_child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>static</span>");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("b")};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0);
	static_child_default({});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
