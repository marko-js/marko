// tags/gate.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/gate.marko": "__tests__/tags/gate.marko;b%bD ;<!><!><p> </p>",
	"__tests__/tags/gate.marko_1*shell": "__tests__/tags/gate.marko_1*shell,<b>shown</b>"
});
var gate_default = _template("__tests__/tags/gate.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const flag = $global$1.flag;
	_if(() => {
		if (flag && input.on) {
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
			_scope($scope1_id, {}, "__tests__/tags/gate.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $scope0_page || _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/gate.marko_1*shell"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/1", flag && input.on ? "on" : "off", 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/gate.marko_0_$global_flag#5/subscribe", $scope0_id);
	_unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_on", input.on, 1);
	_patch_render($scope0_id, "__tests__/tags/gate.marko_0_input_on#4_flag#5/setup", [_filled_guard($scope0_reason, 0) && "input_on", "flag"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_scope($scope0_id, {
		input_on: _unfilled_if($scope0_reason, 0) && input.on,
		flag: _unfilled_if($scope0_reason, 0) && flag
	}, "__tests__/tags/gate.marko", 0, {
		input_on: ["input.on"],
		flag: "1:8"
	}) || _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:flag", flag);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>toggle</button>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	gate_default({ on });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
