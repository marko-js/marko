// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !;D ;<p> </p>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_fn = _server_guard($scope0_reason, 0), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : _resume(() => "-", "__tests__/tags/card.marko_0/g");
	_html(`<p>${_text_mark($scope0_id, "#text/0", g())}</p>`);
	_script($scope0_id, "__tests__/tags/card.marko_0_g#6", 1, $sg__input_fn && 2);
	_patch_render($scope0_id, "__tests__/tags/card.marko_0_input_fn#3_open#4/setup", $fg__input_fn && "input_fn");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#4/fill", open, 1);
	_scope($scope0_id, {
		input_fn: input.fn,
		open: _write_if($scope0_reason, 0) && open,
		g
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6",
		g: "2:8"
	}) || $fg__input_fn && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !$sg__input_fn);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>more</button><span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& bD l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& bD l`)("D l")};${((_w0) => `${_w0}<button>more</button><span> </span>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(($scope0_page ? 3 : 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "__tests__/template.marko_0/fn", $scope0_id) });
	_patch_child_end();
	_html(`<button>more</button>${_el_mark($scope0_id, "#button/1")}<span>${_text_mark($scope0_id, "#text/2", input.x, 1, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#5_n#7/setup", $fg__input_label && "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
