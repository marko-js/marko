// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell; b ;<div></div><span></span>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell; ;<em></em>",
	"__tests__/tags/panel.marko_3*shell": "__tests__/tags/panel.marko_3*shell;D ;<i> </i>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 5), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_b__OR__input_a = _write_if($scope0_reason, 3), $cg__input_a = _client_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $wi__input_b = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em${_patch_attr($scope2_id, "PatchAttr:#em/0 title", "title", input.b, $scope0_reason, 5)}></em>${_el_resume($scope2_id, "#em/0", _mask_group($scope0_reason, 5))}`);
					_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_b ? "__tests__/tags/panel.marko_2_input_b#0:4/init" : "__tests__/tags/panel.marko_2_input_b#0:4/subscribe");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "3:6"), $cg__input_b && "__tests__/tags/panel.marko_2_input_b#0:4/subscribe");
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 4);
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<i>${_patch_text($scope3_id, "#text/0", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</i>`);
					(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope3_id, "__tests__/tags/panel.marko_3_input_b#0:4/subscribe");
					(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope3_id, "__tests__/tags/panel.marko_3_input_a#0:5/subscribe");
					_patch_join_init($scope3_id, "__tests__/tags/panel.marko_3_input_b#0:4_input_a#0:5/init", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && ">>input_b", _filled_guard($scope0_reason, 6) && ">>input_a");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope3_id, {
						_: $wi__input_show__OR__input_b__OR__input_a && _scope_with_id($scope1_id),
						"ClosureSignalIndex:input_b/7": $wi__input_b && 1
					}, "__tests__/tags/panel.marko", "8:6"), $cg__input_b && "__tests__/tags/panel.marko_3_input_b#0:4/subscribe"), $cg__input_a && "__tests__/tags/panel.marko_3_input_a#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#span/1", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_3*shell"], $scope0_reason, 4);
			_html(`</span>${_el_resume($scope1_id, "#span/1", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_show#0:3/init");
			$scope0_page && $wi__input_show__OR__input_b__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 4);
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1/unpatched", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 6) && $cg__input_b));
	$scope0_page ? _scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a,
		"ClosureScopes:input_b/7": $wi__input_b && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && $input_b__closures,
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && $input_a__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) : _filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0/unpatched", input.b) : $cg__input_a && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.b, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
