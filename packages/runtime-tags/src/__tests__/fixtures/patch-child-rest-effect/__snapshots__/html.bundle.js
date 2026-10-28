// tags/dump/index.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var dump_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", JSON.stringify(input), 1, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 1), "d");
	_scope($scope0_id, { d: input.label }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(30);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	dump_default({
		value: count,
		label: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 0));
}, 1);
