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
_shells({
	a0: "a0",
	a: "a !;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Label = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.x ? Label : "span", {}, 2, 0, 0, $wg__input_x, $scope0_reason, 3);
	_dynamic_tag($scope0_id, "b", input.on ? card_default : "div", { content: Label }, 9, 0, 0, $wg__input_on, $scope0_reason, 4);
	_html("</main>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.note,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && Label,
		k: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && (_content_withheld("a0", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_fill($scope0_id, "va3", input.note, !_server_guard($scope0_reason, 2));
}, 1);
