// tags/keeper.marko
_shells({ c: "c !c0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $K_content__walks = "b%c";
const $K_content__template = "<!><!><!>";
_shells({
	b5: /*@__PURE__*/ (() => `b5 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($K_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($K_content__template)}`)(),
	b0: "b0",
	b3: /*@__PURE__*/ ((_w0, _w1) => `b3;${_w0};${_w1}`)($K_content__walks, $K_content__template),
	b6: /*@__PURE__*/ (() => `b6 >a>;${((_w0) => `b/${_w0}&b`)($K_content__walks)};${((_w0) => `<!>${_w0}<!>`)($K_content__template)}`)(),
	b: "b !;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const K = { content: _content_elide("b3", ({ x }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__x = _write_if($scope1_reason, 0), $wg__x = _write_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", x ? keeper_default : "div", {}, 10, _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_dynamic_tag($scope2_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "b1" : "b2");
			($wi__input_content || $wi__x) && _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wg__input_content || ($wi__input_content || $wi__x) && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => $scope1_page ? [{ d: input.content }, { _: $scope($scope0_id) }] : []), 0, $wg__x, $scope1_reason, 0);
		($wi__input_content || $wi__x) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_await($scope0_id, "a", input.p, (x) => {
		const $scope3_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
		const $childScope = _peek_scope_id($scope3_id, "a", 2, void 0, $scope0_id);
		K.content({ x });
		_patch_child_end();
		_filled_guard($scope0_reason, 1) && _content_withheld("b0", $scope3_id) && _patch_fill($scope0_id, "vb4", input.content);
		_scope($scope3_id, { a: _existing_scope($childScope) });
	}, 1, "b5", 1, 1);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.content,
		f: $wi__input_content && $input_content__closures
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_p && _patch_fill($scope0_id, "vb4", input.content, !_server_guard($scope0_reason, 1)), (_content_withheld("b0", $scope0_id) || $cg__input_p) && _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $cg__input_p = _client_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_p && _patch_fill($scope0_id, "va3", input.on, !_server_guard($scope0_reason, 2)), $cg__input_p && _content_withhold(input.on), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "va4", input.p, !_server_guard($scope0_reason, 3)), $cg__input_on && _content_withhold(input.p), _filled_guard($scope0_reason, 4) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va5", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
