// tags/relay/tags/leaf/index.marko
const $template$2 = "<b> </b>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/relay/tags/leaf/index.marko": "__tests__/tags/relay/tags/leaf/index.marko;D ;<b> </b>" });
var leaf_default = _template("__tests__/tags/relay/tags/leaf/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_mark($scope0_id, "#text/0", input.text, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {}, "__tests__/tags/relay/tags/leaf/index.marko", 0);
});

// tags/relay/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/relay/index.marko": `__tests__/tags/relay/index.marko${_shell_marker($setup$1)};${((_w0) => `D/${_w0}&l`)("D l")};${((_w0) => `<section>${_w0}</section>`)($template$2)}` });
var relay_default = _template("__tests__/tags/relay/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	leaf_default({ text: input.val });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/relay/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_base = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	relay_default({ val: input.base + count });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_base#4_count#5/setup", $fg__input_base && "input_base");
	_scope($scope0_id, {
		input_base: input.base,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_base: ["input.base"],
		count: "1:6"
	}) || $fg__input_base && _patch_write($scope0_id, "PatchMarkedWrite:input_base", input.base, !_server_guard($scope0_reason, 0));
}, 1);
