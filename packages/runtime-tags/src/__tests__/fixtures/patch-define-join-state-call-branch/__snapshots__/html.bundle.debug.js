// tags/panel.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=t>t</button>`)($Row_content__template, $Row_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks);
_shells({
	"__tests__/tags/panel.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/panel.marko_1*content;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	"__tests__/tags/panel.marko": /*@__PURE__*/ (() => `__tests__/tags/panel.marko !__tests__/tags/panel.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=t>t</button>`)($Row_content__template, $Row_content__template)}`)(),
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell;D ;<p> </p>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const Row = { content: _content_elide("__tests__/tags/panel.marko_1*content", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__show = _write_guard($scope1_reason, 0), $wi__show = _write_if($scope1_reason, 0);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<p>${_patch_text($scope2_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
				(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:5/subscribe");
				(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/tags/panel.marko_2_input_b#0:6/subscribe");
				_patch_join_init($scope2_id, "__tests__/tags/panel.marko_2_input_a#0:5_input_b#0:6/init", $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope2_id, { _: ($wi__input_a__OR__input_b || $wi__show) && _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "2:4"), _client_guard($scope0_reason, 1) && "__tests__/tags/panel.marko_2_input_a#0:5/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/tags/panel.marko_2_input_b#0:6/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_2*shell"], $scope1_reason, 0);
		($wi__input_a__OR__input_b || $wi__show) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
	}, $scope0_id) };
	let t = true;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Row.content({ show: t });
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	Row.content({ show: input.show });
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	_filled_guard($scope0_reason, 1) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill0/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2)));
	_filled_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill1/unpatched", input.b) : _patch_write($scope0_id, "PatchWrite:input_b", input.b, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	_patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill2", t, 1);
	$scope0_page && _scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		t,
		"ClosureScopes:input_a/9": _write_if($scope0_reason, 1) && $input_a__closures,
		"ClosureScopes:input_b/10": _write_if($scope0_reason, 2) && $input_b__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		t: "6:6"
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(38 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	panel_default({
		a: input.a,
		b: n,
		show: input.show
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	panel_default({
		a: input.a,
		b: input.b,
		show: input.show
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
