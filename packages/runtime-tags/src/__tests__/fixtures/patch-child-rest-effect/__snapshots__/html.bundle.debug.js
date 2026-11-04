// tags/dump/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/dump/index.marko": "__tests__/tags/dump/index.marko;D ;<p> </p>" });
var dump_default = _template("__tests__/tags/dump/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", JSON.stringify(input), 1, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "__tests__/tags/dump/index.marko_0_input_label#3", 1, $fg__input_label, "input_label");
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/dump/index.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(30);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	dump_default({
		value: count,
		label: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#4_count#5/setup", $fg__input_title && "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
