// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template = "<!><!><!>";
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b;b%;<!><!><!>",
	b1: /*@__PURE__*/ (() => `b1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const Info = { content: _content_elide("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_patch_text($scope1_id, "a", input.a + ":" + input.b, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b2");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b3");
		_patch_join_init($scope1_id, "b4", $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 4) && "b2"), _client_guard($scope0_reason, 5) && "b3");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "a", $scope0_id);
			Info.content({});
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 6);
	_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 6) ? _patch_value($scope0_id, "vb5", input.a) : _patch_write($scope0_id, "wd", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5)));
	_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6) ? _patch_value($scope0_id, "vb6", input.b) : _patch_write($scope0_id, "we", input.b, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		g: _write_if($scope0_reason, 4) && $input_a__closures,
		h: _write_if($scope0_reason, 5) && $input_b__closures
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	let s = false;
	_set_scope_reason(9198 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: count,
		b: input.x,
		show: s
	});
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope2 = _patch_child($scope0_id, "b");
	panel_default({
		a: input.y,
		b: input.x,
		show: s
	});
	_html(`<button class=c>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	_patch_value($scope0_id, "va2", s, 1);
	$scope0_page && _scope($scope0_id, {
		i: count,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
