// tags/panel.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%bD ;<!><!><p> </p>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell; ;<div></div>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "#text/0", input.b, 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_b ? "__tests__/tags/panel.marko_2_input_b#0:5/init" : "__tests__/tags/panel.marko_2_input_b#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "3:6"), $cg__input_b && "__tests__/tags/panel.marko_2_input_b#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 3);
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_show#0:4/init");
			$wi__input_show__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 3);
	_html(`<p>${_text_resume($scope0_id, "#text/1", input.a + ":" + input.b, 1, $scope0_reason, 2)}</p>`);
	$cg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 5) && $cg__input_b));
	_patch_join_init($scope0_id, "__tests__/tags/panel.marko_0_input_b#5_input_a#6/init", $scope0_reason, 2, _filled_guard($scope0_reason, 4) && "input_b", _filled_guard($scope0_reason, 5) && "input_a");
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.a,
		"ClosureScopes:input_b/9": _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_b__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) || _filled_guard($scope0_reason, 4) && ($cg__input_show || _client_guard($scope0_reason, 5)) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.b, !_server_guard($scope0_reason, 4));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2168 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
