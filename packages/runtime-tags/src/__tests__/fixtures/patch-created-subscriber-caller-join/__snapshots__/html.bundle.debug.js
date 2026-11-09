// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell; ;<div></div>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_a__OR__input_b = _write_if($scope0_reason, 3), $ui__input_show__OR__input_b = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", input.a + ":" + input.b, 1, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:4/subscribe");
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "__tests__/tags/panel.marko_2_input_b#0:5/subscribe");
					_patch_render($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:4_input_b#0:5/setup", [_filled_guard($scope0_reason, 5) && ">>input_a", _filled_guard($scope0_reason, 6) && ">>input_b"], $scope0_reason, 2);
					_subscribe(_unfilled_if($scope0_reason, 6) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_a__OR__input_b && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "3:6"), _client_guard($scope0_reason, 5) && "__tests__/tags/panel.marko_2_input_a#0:4/subscribe"), _client_guard($scope0_reason, 6) && "__tests__/tags/panel.marko_2_input_b#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 4);
			_html(`</div>${_el_mark($scope1_id, "#div/0", $wg__input_show)}`);
			$cg__input_show && _patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_show#0:3/setup");
			$wi__input_show__OR__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 4);
	$fg__input_a && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_a#4/subscribers", "input_a");
	$fg__input_b && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_b#5/subscribers", "input_b");
	_scope($scope0_id, {
		input_a: ($ui__input_show__OR__input_b || $ui__input_a__OR__input_b) && input.a,
		input_b: ($ui__input_show__OR__input_a || $ui__input_a__OR__input_b) && input.b,
		"ClosureScopes:input_a/7": _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || $ui__input_a__OR__input_b || $ui__input_show) && $input_a__closures,
		"ClosureScopes:input_b/8": _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || $ui__input_a__OR__input_b || $ui__input_show) && $input_b__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && $ui__input_show__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && $ui__input_show__OR__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2534 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 2) << 9 | _updates_from($scope0_reason, 1) << 13));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
