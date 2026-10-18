// tags/wrapper.marko
const $template$1 = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	c0: "c0;D ;<p> </p>",
	c: "c;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "c2" : "c3");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "c3");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.fallback, {}, 0, 0, $wg__input_fallback);
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1", $wg__input_fallback);
		$wg__input_fallback || _resume_branch($scope1_id);
	}, void 0, "c4", "c0", 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: $wi__input_fallback && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vc5", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// tags/panel.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({
	b0: "b0,",
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("b0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</em>`);
			(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b1");
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b2");
			_patch_join_init($scope1_id, "b3", $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		}, $scope0_id) })
	});
	_filled_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb4", input.a) : _patch_write($scope0_id, "we", input.a, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3)));
	_filled_guard($scope0_reason, 3) ? _patch_value($scope0_id, "vb5", input.b) : _patch_write($scope0_id, "wf", input.b, !(_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2)));
	$scope0_page && _scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: _write_if($scope0_reason, 2) && $input_a__closures,
		h: _write_if($scope0_reason, 3) && $input_b__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(134 | (_mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: input.a,
		b: n,
		fail: input.fail
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _patch_child($scope0_id, "b");
	panel_default({
		a: input.a,
		b: input.b,
		fail: input.fail
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
