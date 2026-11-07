// tags/l1/tags/l2/tags/l3/index.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/l1/tags/l2/tags/l3/index.marko": "__tests__/tags/l1/tags/l2/tags/l3/index.marko;D ;<em> </em>" });
var l3_default = _template("__tests__/tags/l1/tags/l2/tags/l3/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.note, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/l1/tags/l2/tags/l3/index.marko", 0);
});

// tags/l1/tags/l2/index.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
const $setup$2 = _shell_setup([[], ["__tests__/tags/l1/tags/l2/index.marko_0"]], ["#childScope/2>", $setup$3]);
_shells({ "__tests__/tags/l1/tags/l2/index.marko": `__tests__/tags/l1/tags/l2/index.marko${_shell_marker($setup$2)};${((_w0) => ` D l/${_w0}&`)("D l")};${((_w0) => `<button class=n> </button>${_w0}`)($template$3)}` });
var l2_default = _template("__tests__/tags/l1/tags/l2/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	l3_default({ note: input.note });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/l1/tags/l2/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/l1/tags/l2/index.marko_0_n#6/fill", n, 1);
	_scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/l1/tags/l2/index.marko", 0, { n: "1:6" });
});

// tags/l1/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/l1/index.marko": `__tests__/tags/l1/index.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$2)};${$template$2}` });
var l1_default = _template("__tests__/tags/l1/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	l2_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/l1/index.marko", 0);
});

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_note = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			l1_default({ note: input.note });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_note#0:4/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=t>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_note && _patch_render($scope0_id, "__tests__/template.marko_1_input_note#0:4/setup", "input_note");
	_scope($scope0_id, {
		input_note: input.note,
		show
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		show: "1:6"
	}) || $fg__input_note && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 0));
}, 1);
