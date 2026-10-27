// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/panel.marko_0"]];
_shells({
	"__tests__/tags/panel.marko_1*content": "__tests__/tags/panel.marko_1*content;D ;<p> </p>",
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !__tests__/tags/panel.marko_0;b%b%b ;<!><!><!><button class=t>t</button>",
	"__tests__/tags/panel.marko_3*shell": /*@__PURE__*/ (() => `__tests__/tags/panel.marko_3*shell >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	let open = true;
	const Info = { content: _content_elide("__tests__/tags/panel.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + ":" + input.b, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:5/subscribe");
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_b#0:6/subscribe");
		_patch_join_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:5_input_b#0:6/init", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">input_a", _filled_guard($scope0_reason, 4) && ">input_b");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "2:2"), $cg__input_a && "__tests__/tags/panel.marko_1_input_a#0:5/subscribe"), _client_guard($scope0_reason, 4) && "__tests__/tags/panel.marko_1_input_b#0:6/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const $childScope = _patch_child($scope3_id, "#childScope/0", 0, void 0, $scope0_id);
			Info.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 5) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/panel.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["__tests__/tags/panel.marko_3*shell"], $scope0_reason, 5);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "#div/0")}`);
			_script($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:5");
			_scope($scope2_id, {}, "__tests__/tags/panel.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 4) && $cg__input_a));
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill2", open, 1);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		open,
		"ClosureScopes:input_a/9": _write_if($scope0_reason, 3) && $input_a__closures,
		"ClosureScopes:input_b/10": _write_if($scope0_reason, 4) && $input_b__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) || _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0/unpatched", input.a) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(2686 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	panel_default({
		a: input.a,
		b: n,
		show: s
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 5) << 11);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	panel_default({
		a: input.a,
		b: input.b,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=s>s</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		s,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		s: "2:6"
	});
}, 1);
