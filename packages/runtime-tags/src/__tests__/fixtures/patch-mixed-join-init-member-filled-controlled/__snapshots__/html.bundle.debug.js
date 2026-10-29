// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell; b ;<div></div><span></span>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell;D ;<i> </i>",
	"__tests__/tags/panel.marko_3*shell": "__tests__/tags/panel.marko_3*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b__OR__input_bChange = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 7), $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a = _write_if($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 8), $cg__input_show = _client_guard($scope0_reason, 7), $wi__input_b__OR__input_bChange = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $b__closures = new Set();
	const $input_a__closures = new Set();
	let b = input.b;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "#text/0", b, 1, $scope0_reason, 0)}</em>`);
					_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_b__OR__input_bChange ? "__tests__/tags/panel.marko_3_b#0:8/init" : "__tests__/tags/panel.marko_3_b#0:8/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 0) && $b__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id),
						"ClosureSignalIndex:b/12": $wi__input_b__OR__input_bChange && 1
					}, "__tests__/tags/panel.marko", "4:6"), $cg__input_b__OR__input_bChange && "__tests__/tags/panel.marko_3_b#0:8/subscribe");
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_3*shell"], $scope0_reason, 7);
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "#text/0", input.a + ":" + b, 1, $scope0_reason, 3)}</i>`);
					(_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 3)) && _patch_init($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:7/subscribe");
					(_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && _patch_init($scope2_id, "__tests__/tags/panel.marko_2_b#0:8/subscribe");
					_patch_join_init($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:7_b#0:8/init", $scope0_reason, 3, _filled_guard($scope0_reason, 8) && ">>input_a", _filled_guard($scope0_reason, 0) && ">>b");
					_subscribe(_unfilled_if($scope0_reason, 0) && $b__closures, _subscribe(_unfilled_if($scope0_reason, 8) && $input_a__closures, _scope($scope2_id, { _: $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "9:6"), $cg__input_a && "__tests__/tags/panel.marko_2_input_a#0:7/subscribe"), $cg__input_b__OR__input_bChange && "__tests__/tags/panel.marko_2_b#0:8/subscribe");
					return 0;
				}
			}, $scope1_id, "#span/1", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 7);
			_html(`</span>${_el_resume($scope1_id, "#span/1", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_show#0:6/init");
			$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 7);
	_filled_guard($scope0_reason, 8) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill2/unpatched", input.a) : _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 8) && $cg__input_b__OR__input_bChange));
	$cg__input_b__OR__input_bChange && _patch_init($scope0_id, "__tests__/tags/panel.marko_0_input_b#3_input_bChange#4/init");
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.b,
		input_bChange: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.bChange,
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.a,
		b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && b,
		"ClosureScopes:b/12": $wi__input_b__OR__input_bChange && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && $b__closures,
		"ClosureScopes:input_a/11": _write_if($scope0_reason, 8) && (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && $input_a__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_b: ["input.b"],
		input_bChange: ["input.bChange"],
		input_a: ["input.a"],
		b: "1:6"
	}) || (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.b, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1", input.bChange, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 0) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill3/unpatched", b) : $cg__input_a && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill3", b, !_server_guard($scope0_reason, 0))));
	$wg__input_show || $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&%b b`)("b%c")};${((_w0) => `<!>${_w0}<!><button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(133016 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 15));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		bChange: _resume(function() {}, "__tests__/template.marko_0/bChange"),
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_if(() => {
		if (count > 5) {
			const $scope1_id = _scope_id();
			_set_scope_reason(131720);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			panel_default({
				bChange: _resume(function() {}, "__tests__/template.marko_1/bChange2"),
				a: count,
				b: "z",
				show: true
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
