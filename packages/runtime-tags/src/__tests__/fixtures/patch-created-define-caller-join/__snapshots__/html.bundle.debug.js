// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/panel.marko_1*content": "__tests__/tags/panel.marko_1*content;D ;<p> </p>",
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%;<!><!><!>",
	"__tests__/tags/panel.marko_2*shell": /*@__PURE__*/ (() => `__tests__/tags/panel.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const Info = { content: _content_elide("__tests__/tags/panel.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + ":" + input.b, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:3/subscribe");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_b#0:4/subscribe");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:3_input_b#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2"), _client_guard($scope0_reason, 4) && "__tests__/tags/panel.marko_1_input_a#0:3/subscribe"), _client_guard($scope0_reason, 5) && "__tests__/tags/panel.marko_1_input_b#0:4/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "#childScope/0", $scope0_id);
			Info.content({});
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/panel.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 6);
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.b,
		"ClosureScopes:input_a/6": _write_if($scope0_reason, 4) && $input_a__closures,
		"ClosureScopes:input_b/7": _write_if($scope0_reason, 5) && $input_b__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 5) || _client_guard($scope0_reason, 6)) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill0", input.a, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 6)) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill1", input.b, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(926 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 13));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
