// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;D ;<p> </p>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 4);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, 1);
	_patch_write($scope0_id, "PatchWrite:input_b", input.b, 1);
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 6) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill0", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill1", input.b, !_server_guard($scope0_reason, 6))));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	let s = false;
	_set_scope_reason(3066 | _mask_group($scope0_reason, 1) << 13);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	panel_default({
		a: count,
		b: input.x,
		show: s
	});
	_set_scope_reason(926 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 1) << 13));
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	panel_default({
		a: input.y,
		b: input.x,
		show: s
	});
	_html(`<button class=c>+</button>${_el_resume($scope0_id, "#button/2")}<button class=s>s</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", s, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		s,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		s: "2:6"
	});
}, 1);
