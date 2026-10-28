// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
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
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
_shells({
	a7: /*@__PURE__*/ (() => `a7 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	a0: "a0",
	a8: /*@__PURE__*/ (() => `a8 >a>;${((_w0) => `b/${_w0}&b`)($Body_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `E/${_w0}&l%l`)($Body_content__walks)};${((_w0) => `<main><section>${_w0}</section><!></main>`)($Body_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope2_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_note && _scope_with_id($scope1_id) }));
		}, $scope1_id, ($scope) => $scope1_page ? [{ f: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_on, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_on ? "a4" : "a5");
		$wi__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 1) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_on && "a5", $wg__input_on);
		$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<main><section>");
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Body.content({});
	_patch_child_end();
	_html("</section>");
	_await($scope0_id, "b", input.v, (v) => {
		const $scope3_id = _scope_id();
		const $childScope2 = _peek_scope_id($scope3_id, "a", 2, 0, $scope0_id);
		Body.content({});
		_patch_child_end();
		_filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope3_id) && _patch_fill($scope0_id, "va6", input.note);
		_scope($scope3_id, { a: _existing_scope($childScope2) });
	}, 1, "a7", 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		i: _write_if($scope0_reason, 2) && $input_note__closures,
		h: _write_if($scope0_reason, 1) && $input_on__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && ($cg__input_on ? _patch_fill($scope0_id, "va9", input.note, !_server_guard($scope0_reason, 2)) : _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va6", input.note));
}, 1);
