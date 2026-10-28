// tags/badge/index.marko
const $template = "<span> </span>";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D ;<span> </span>" });
var badge_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_text_resume($scope0_id, "a", $global$1.brand, void 0, 4, 0)}</span>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("D l")};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	badge_default({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
