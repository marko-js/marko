// tags/rows.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/rows.marko": "__tests__/tags/rows.marko; ;<ul></ul>",
	"__tests__/tags/rows.marko_1*shell": "__tests__/tags/rows.marko_1*shell;D ;<li> </li>"
});
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<ul>");
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", i + ":" + $global$1.x, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</li>`);
		_fill_global_subscribe("__tests__/tags/rows.marko_1_$global_x#0:8/subscribe", $scope1_id);
		_scope($scope1_id, { "#LoopKey": _unfilled_if($scope0_reason, 0) && i }, "__tests__/tags/rows.marko", "2:4", { "#LoopKey": "2:8" });
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/tags/rows.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/tags/rows.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>+</button>${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)(" b", " b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => ` b/${_w0}&/${_w1}&`)(" b", " b")};${((_w0, _w1) => `<button>+</button>${_w0}${_w1}`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	rows_default({ n });
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	rows_default({ n: input.m });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
