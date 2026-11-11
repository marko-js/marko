// tags/probe.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko; ;<output></output>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_get#3", 1, $fg__input_get);
	_scope($scope0_id, { get: input.get }, "__tests__/tags/probe.marko", 0, { get: "1:10" }) || $fg__input_get && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/w.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/w.marko_2*content": "__tests__/tags/w.marko_2*content",
	"__tests__/tags/w.marko_1*content": "__tests__/tags/w.marko_1*content",
	"__tests__/tags/w.marko": `__tests__/tags/w.marko${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&`)(" b")};${((_w0) => `<!><!>${_w0}`)($template$2)}`,
	"__tests__/tags/w.marko_3*shell": "__tests__/tags/w.marko_3*shell !__tests__/tags/w.marko_3; ;<button>a</button>",
	"__tests__/tags/w.marko_4*shell": "__tests__/tags/w.marko_4*shell !__tests__/tags/w.marko_4; ;<button>b</button>"
});
var w_default = _template("__tests__/tags/w.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $wg__input_flag__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_flag__OR__input_x = _unfilled_if($scope0_reason, 0), $fg__input_flag = _filled_guard($scope0_reason, 3), $fg__input_x = _filled_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/tags/w.marko_0_input_show#4/subscribers", "input_show");
	const A = { content: _content_resume("__tests__/tags/w.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_patch_write($scope1_id, "PatchMarkedWrite:x", x);
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_mark($scope3_id, "#button/0")}`);
				_script($scope3_id, "__tests__/tags/w.marko_3");
				_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/w.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/w.marko_3*shell"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/w.marko_1_input_show#0:4/subscribe", $cg__input_show);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}, "__tests__/tags/w.marko", "1:2", { x: "1:13" }), $cg__input_show && "__tests__/tags/w.marko_1_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/tags/w.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_patch_write($scope2_id, "PatchMarkedWrite:x", x);
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_mark($scope4_id, "#button/0")}`);
				_script($scope4_id, "__tests__/tags/w.marko_4");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/tags/w.marko", "9:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/w.marko_4*shell"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/w.marko_2_input_show#0:4/subscribe", $cg__input_show);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_show/10": $wi__input_show && 1
		}, "__tests__/tags/w.marko", "7:2", { x: "7:13" }), $cg__input_show && "__tests__/tags/w.marko_2_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.flag ? A : B, { x: input.x }, 1, 0, 0, $wg__input_flag__OR__input_x, $scope0_reason, 0);
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "__tests__/tags/w.marko_0/get", $scope0_id) });
	_patch_child_end();
	$ui__input_flag__OR__input_x && _patch_write($scope0_id, "PatchWrite:A", A, 1);
	$ui__input_flag__OR__input_x && _patch_write($scope0_id, "PatchWrite:B", B, 1);
	_patch_render($scope0_id, "__tests__/tags/w.marko_0_input_flag#5_input_x#6_A#7_B#8/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_x ? " input_x" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_show: input.show,
		input_flag: _write_if($scope0_reason, 4) && $ui__input_flag__OR__input_x && input.flag,
		input_x: _write_if($scope0_reason, 3) && $ui__input_flag__OR__input_x && input.x,
		A: $ui__input_flag__OR__input_x && A,
		B: $ui__input_flag__OR__input_x && B,
		"ClosureScopes:input_show/10": $wi__input_show && $input_show__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/w.marko", 0, {
		input_show: ["input.show"],
		input_flag: ["input.flag"],
		input_x: ["input.x"],
		A: "1:9",
		B: "7:9"
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 3)), $fg__input_x && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 4) << 7 | _updates_from($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	w_default({
		x: input.a,
		show: input.show,
		flag: input.flag
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
