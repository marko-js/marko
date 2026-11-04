// tags/duo/index.marko
const $template = "<h2> </h2><p> </p>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<h2> </h2><p> </p>" });
var duo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h2>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 1)}</h2><p>${_text_mark($scope0_id, "b", JSON.stringify(input), 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(30);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	duo_default({
		label: input.title,
		value: count
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_title && "e");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		a: _existing_scope($childScope)
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
