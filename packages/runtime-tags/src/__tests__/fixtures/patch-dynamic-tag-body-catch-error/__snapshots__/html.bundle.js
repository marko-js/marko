// tags/card.marko
_shells({
	b3: "b3 b10;b%;<!><!><!>",
	b4: "b4",
	b: "b !b6; b%;<button id=toggle>fail</button><!><!>",
	b2: "b2;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $fail__closures = /* @__PURE__ */ new Set();
	let fail = false;
	_html(`<button id=toggle>fail</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {}, $scope3_id, "a");
		_subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "b5");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<i>${_patch_text($scope1_id, "a", err.message)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "b0" : "b1");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["b2"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "b4", "b3", 1, 1, 1);
	_script($scope0_id, "b6");
	_patch_fill($scope0_id, "vb8", fail, 1);
	_scope($scope0_id, {
		e: input.content,
		g: _write_if($scope0_reason, 0) && $input_content__closures,
		h: $fail__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb7", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va3", input.note, !_server_guard($scope0_reason, 2));
}, 1);
