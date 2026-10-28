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
	a3: "a3 >>>a>",
	a7: "a7;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a8: "a8;b%;<!><!><!>",
	a9: "a9;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 6), $cg__input_on = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_on = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_note ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_note && "a2");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.v, (v) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", input.on ? card_default : "div", {}, 10, _content_resume("a3", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					const $childScope = _peek_scope_id($scope4_id, "a", 0, void 0, $scope0_id);
					Body.content({});
					_patch_child_end();
					_scope($scope4_id, {
						_: $wi__input_show__OR__input_on && _scope_with_id($scope3_id),
						a: _existing_scope($childScope)
					});
				}, $scope3_id), 0, $wg__input_on, $scope0_reason, 6);
				_filled_guard($scope0_reason, 3) && _content_withheld("a3", $scope3_id) && _patch_fill($scope0_id, "va4", input.note);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, $cg__input_on ? "a5" : "a6");
				$wi__input_show__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 6) && $input_on__closures, _scope($scope3_id, {}), $cg__input_on && "a6", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_on && _resume_branch($scope3_id);
			}, 1, "a7", void 0, 1);
			_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "a10");
			_write_if($scope0_reason, 2) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a9"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.note,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.v,
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.on,
		h: _write_if($scope0_reason, 3) && $input_note__closures,
		j: _write_if($scope0_reason, 6) && _unfilled_if($scope0_reason, 6) && $input_on__closures
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va11", input.v, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "va12", input.on, !_server_guard($scope0_reason, 6)), $cg__input_show && _content_withhold(input.on));
}, 1);
