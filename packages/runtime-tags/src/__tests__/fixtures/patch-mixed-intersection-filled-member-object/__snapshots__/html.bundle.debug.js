// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell; b ;<div></div><span></span>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell;D ;<i> </i>",
	"__tests__/tags/panel.marko_3*shell": "__tests__/tags/panel.marko_3*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_b__OR__input_a = _unfilled_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 5), $wi__input_b__OR__input_show__OR__input_a = _write_if($scope0_reason, 3), $ui__input_b = _unfilled_if($scope0_reason, 4), $ui__input_b__OR__input_show = _unfilled_if($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 5), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $b__closures = new Set();
	const $input_a__closures = new Set();
	const b = { value: input.b };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_mark($scope3_id, "#text/0", JSON.stringify(b), 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/tags/panel.marko_3_b#0:6/subscribe", $cg__input_b);
					_subscribe(_unfilled_if($scope0_reason, 4) && $b__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
						"ClosureSignalIndex:b/9": $wi__input_b && 1
					}, "__tests__/tags/panel.marko", "4:6"), $cg__input_b && "__tests__/tags/panel.marko_3_b#0:6/subscribe");
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_3*shell"], $scope0_reason, 5);
			_html(`</div>${_el_mark($scope1_id, "#div/0", $wg__input_show)}<span>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", input.a + ":" + JSON.stringify(b), 1, $scope0_reason, 1)}</i>`);
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:5/subscribe");
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/tags/panel.marko_2_b#0:6/subscribe");
					_patch_render($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:5_b#0:6/setup", ((_filled_guard($scope0_reason, 6) ? " >>input_a" : "") + (_filled_guard($scope0_reason, 4) ? " >>b" : "")).slice(1), $scope0_reason, 1);
					_subscribe(_unfilled_if($scope0_reason, 4) && $b__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _scope($scope2_id, { _: $wi__input_b__OR__input_show__OR__input_a && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "9:6"), _client_guard($scope0_reason, 6) && "__tests__/tags/panel.marko_2_input_a#0:5/subscribe"), $cg__input_b && "__tests__/tags/panel.marko_2_b#0:6/subscribe");
					return 0;
				}
			}, $scope1_id, "#span/1", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 5);
			_html(`</span>${_el_mark($scope1_id, "#span/1", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_show#0:4/setup");
			$wi__input_b__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 5);
	_scope($scope0_id, {
		input_a: ($ui__input_b__OR__input_show || $ui__input_b__OR__input_a) && input.a,
		b: ($ui__input_show__OR__input_a || $ui__input_b__OR__input_a || $ui__input_b) && b,
		"ClosureScopes:b/9": $wi__input_b && ($ui__input_b || $ui__input_b__OR__input_a || $ui__input_show) && $b__closures,
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || $ui__input_b__OR__input_a || $ui__input_show) && $input_a__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		b: "1:8"
	}) || (_filled_guard($scope0_reason, 6) && $ui__input_b__OR__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_a#5/subscribers", "input_a"), _filled_guard($scope0_reason, 4) && $ui__input_show__OR__input_a && _patch_write($scope0_id, "PatchMarkedWrite:b", b, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_b#6/subscribers", "b"));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&%b b`)("b%c")};${((_w0) => `<!>${_w0}<!><button>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8696 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 2) << 11));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_if(() => {
		if (count > 5) {
			const $scope1_id = _scope_id();
			_set_scope_reason(8360);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			panel_default({
				a: count,
				b: "z",
				show: true
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
