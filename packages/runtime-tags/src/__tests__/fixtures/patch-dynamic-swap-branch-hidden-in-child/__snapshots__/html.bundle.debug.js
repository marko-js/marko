// tags/w.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/w.marko_2*content": "__tests__/tags/w.marko_2*content,",
	"__tests__/tags/w.marko_1*content": "__tests__/tags/w.marko_1*content,",
	"__tests__/tags/w.marko": "__tests__/tags/w.marko !;b%;<!><!><!>",
	"__tests__/tags/w.marko_3*shell": "__tests__/tags/w.marko_3*shell !__tests__/tags/w.marko_3; ;<button>a</button>",
	"__tests__/tags/w.marko_4*shell": "__tests__/tags/w.marko_4*shell !__tests__/tags/w.marko_4; ;<button>b</button>"
});
var w_default = _template("__tests__/tags/w.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $wg__input_flag__OR__input_x = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	const A = { content: _content_resume("__tests__/tags/w.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "PatchWrite:x", x);
		const $scope1_reason = _scope_reason();
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_resume($scope3_id, "#button/0")}`);
				_script($scope3_id, "__tests__/tags/w.marko_3");
				_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/w.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/w.marko_3*shell"], $scope0_reason, 2);
		_patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/w.marko_1_input_show#0:3/init" : "__tests__/tags/w.marko_1_input_show#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}, "__tests__/tags/w.marko", "1:2", { x: "1:13" }));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/tags/w.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		_patch_write($scope2_id, "PatchWrite:x", x);
		const $scope2_reason = _scope_reason();
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_resume($scope4_id, "#button/0")}`);
				_script($scope4_id, "__tests__/tags/w.marko_4");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/tags/w.marko", "9:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/w.marko_4*shell"], $scope0_reason, 2);
		_patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/w.marko_2_input_show#0:3/init" : "__tests__/tags/w.marko_2_input_show#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_show/9": $wi__input_show && 1
		}, "__tests__/tags/w.marko", "7:2", { x: "7:13" }));
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.flag ? A : B, { x: input.x }, 0, 0, $wg__input_flag__OR__input_x, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_flag", input.flag, 1);
	_patch_write($scope0_id, "PatchWrite:input_x", input.x, 1);
	_patch_write($scope0_id, "PatchWrite:A", A, 1);
	_patch_write($scope0_id, "PatchWrite:B", B, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/w.marko_0_input_flag#4_input_x#5_A#6_B#7/init");
	$scope0_page ? _scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.show,
		input_flag: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.flag,
		input_x: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.x,
		A: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && A,
		B: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && B,
		"ClosureScopes:input_show/9": $wi__input_show && $input_show__closures
	}, "__tests__/tags/w.marko", 0, {
		input_show: ["input.show"],
		input_flag: ["input.flag"],
		input_x: ["input.x"],
		A: "1:9",
		B: "7:9"
	}) : (_filled_guard($scope0_reason, 2) && (_content_withheld("__tests__/tags/w.marko_1*content") && _client_guard($scope0_reason, 0) || _content_withheld("__tests__/tags/w.marko_2*content") && _client_guard($scope0_reason, 0)) && _patch_value($scope0_id, "PatchValue:__tests__/tags/w.marko_fill0", input.show, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/tags/w.marko_fill1", input.flag, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/tags/w.marko_fill2", input.x, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	w_default({
		x: input.a,
		show: input.show,
		flag: input.flag
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
