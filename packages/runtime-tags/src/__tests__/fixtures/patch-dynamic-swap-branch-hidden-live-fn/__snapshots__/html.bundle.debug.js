// tags/probe.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko; ;<output></output>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_get#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/probe.marko_0_get#3" : "PatchEffect:__tests__/tags/probe.marko_0_get#3", "get");
	$scope0_page ? _scope($scope0_id, { get: input.get }, "__tests__/tags/probe.marko", 0, { get: "1:10" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/w.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/w.marko_2*content": "__tests__/tags/w.marko_2*content __tests__/tags/w.marko_2_input_show#0:4/subscribe",
	"__tests__/tags/w.marko_1*content": "__tests__/tags/w.marko_1*content __tests__/tags/w.marko_1_input_show#0:4/subscribe",
	"__tests__/tags/w.marko": /*@__PURE__*/ (() => `__tests__/tags/w.marko${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&`)(" b")};${((_w0) => `<!><!>${_w0}`)($template$2)}`)(),
	"__tests__/tags/w.marko_3*shell": "__tests__/tags/w.marko_3*shell !__tests__/tags/w.marko_3; ;<button>a</button>",
	"__tests__/tags/w.marko_4*shell": "__tests__/tags/w.marko_4*shell !__tests__/tags/w.marko_4; ;<button>b</button>"
});
var w_default = _template("__tests__/tags/w.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $sg__input_show = _server_guard($scope0_reason, 2), $cg__input_x = _client_guard($scope0_reason, 4), $cg__input_flag = _client_guard($scope0_reason, 3), $cg__input_flag__OR__input_x = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/w.marko_fill0", input.show, !$sg__input_show);
	const A = { content: _content_resume("__tests__/tags/w.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_patch_write($scope1_id, "PatchWrite:x", x);
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_resume($scope3_id, "#button/0")}`);
				_script($scope3_id, "__tests__/tags/w.marko_3");
				$scope1_page && _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/w.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/w.marko_3*shell"], $scope0_reason, 2);
		$cg__input_show && _patch_init($scope1_id, "__tests__/tags/w.marko_1_input_show#0:4/init");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}, "__tests__/tags/w.marko", "1:2", { x: "1:13" }));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/tags/w.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_patch_write($scope2_id, "PatchWrite:x", x);
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_resume($scope4_id, "#button/0")}`);
				_script($scope4_id, "__tests__/tags/w.marko_4");
				$scope2_page && _scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/tags/w.marko", "9:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/w.marko_4*shell"], $scope0_reason, 2);
		$cg__input_show && _patch_init($scope2_id, "__tests__/tags/w.marko_2_input_show#0:4/init");
		$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_show/10": $wi__input_show && 1
		}, "__tests__/tags/w.marko", "7:2", { x: "7:13" }));
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.flag ? A : B, { x: input.x }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 1);
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "__tests__/tags/w.marko_0/get", $scope0_id) });
	_patch_child_end();
	$cg__input_flag__OR__input_x && _patch_write($scope0_id, "PatchWrite:A", A, 1);
	$cg__input_flag__OR__input_x && _patch_write($scope0_id, "PatchWrite:B", B, 1);
	$cg__input_flag__OR__input_x && _patch_init($scope0_id, "__tests__/tags/w.marko_0_input_flag#5_input_x#6_A#7_B#8/init");
	$scope0_page ? _scope($scope0_id, {
		input_show: input.show,
		input_flag: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.flag,
		input_x: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.x,
		A: _unfilled_if($scope0_reason, 0) && A,
		B: _unfilled_if($scope0_reason, 0) && B,
		"ClosureScopes:input_show/10": $wi__input_show && $input_show__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/w.marko", 0, {
		input_show: ["input.show"],
		input_flag: ["input.flag"],
		input_x: ["input.x"],
		A: "1:9",
		B: "7:9"
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/tags/w.marko_fill1", input.flag, !_server_guard($scope0_reason, 3)), $cg__input_x && _content_withhold(input.flag), _filled_guard($scope0_reason, 4) && $cg__input_flag && _patch_fill($scope0_id, "PatchFill:__tests__/tags/w.marko_fill2", input.x, !_server_guard($scope0_reason, 4)), $cg__input_flag && _content_withhold(input.x));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	w_default({
		x: input.a,
		show: input.show,
		flag: input.flag
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
