// tags/tagger/index.marko
const $template = "<span>t</span>";
const $setup$1 = [[], []];
_shells({ b: "b,<span>t</span>" });
var tagger_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const g = $global().locale + "!";
	_html("<span>t</span>");
	const $return = g;
	_fill_global_subscribe("b0", $scope0_id);
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&D m`)("b")};${((_w0) => `<main>${_w0}<p> </p></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	let tag = tagger_default({});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", tag, void 0, 4, 0)}</p></main>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
