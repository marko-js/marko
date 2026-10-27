// tags/dump/index.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var dump_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", JSON.stringify(input), void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `E l/${_w0}& l`)("D l")};${((_w0) => `<main><h1> </h1>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "b", 0);
	dump_default({ value: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
}, 1);
