// tags/labeler/index.marko
const $template = "<span>fmt</span>";
const $setup$1 = [[], []];
_shells({ b: "b,<span>fmt</span>" });
var labeler_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>fmt</span>");
	return "[" + input.title + "]";
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}& D m`)("b")};${((_w0) => `<main>${_w0}<button> </button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", 0, $cg__input_title && 1);
	let label = labeler_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2", 1, _filled_guard($scope0_reason, 0), "i");
	_scope($scope0_id, {
		h: count,
		i: label,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xi", label, !_server_guard($scope0_reason, 0));
}, 1);
