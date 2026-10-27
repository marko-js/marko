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
	a9: "a9 !;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a10: "a10 !;b%;<!><!><!>",
	a11: "a11 !; b%;<div></div><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 7), $cg__input_on = _client_guard($scope0_reason, 7), $wi__input_show__OR__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 3), $sg__input_note = _server_guard($scope0_reason, 5), $cg__input_note = _client_guard($scope0_reason, 5), $cg__input_v = _client_guard($scope0_reason, 6), $wg__input_show = _write_guard($scope0_reason, 4), $sg__input_v = _server_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			const x = input.note + "!";
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			_await($scope1_id, "b", input.v, (v) => {
				const $scope2_id = _scope_id();
				const $await_content__v__closures = /* @__PURE__ */ new Set();
				_dynamic_tag($scope2_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<em>${_patch_text($scope3_id, "a", x, void 0, $scope0_reason, 5)} ${_patch_text($scope3_id, "b", v, 2, $scope0_reason, 6)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, $cg__input_note ? "a1" : "a2");
					_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, $cg__input_v ? "a3" : "a4");
					_subscribe(_unfilled_if($scope0_reason, 6) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $if_content__x__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id) })));
				}, $scope2_id, ($scope) => $scope0_page ? [{ c: v }] : []), 0, $wg__input_on, $scope0_reason, 7);
				_filled_guard($scope0_reason, 6) && _content_withheld("a0", $scope2_id) && _patch_fill($scope2_id, "va5", v);
				_filled_guard($scope0_reason, 5) && _content_withheld("a0", $scope2_id) && _patch_fill($scope1_id, "va6", x);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope2_id, $cg__input_on ? "a7" : "a8");
				$wi__input_show__OR__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 7) && $input_on__closures, _scope($scope2_id, {
					c: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 6)) && v,
					l: _write_if($scope0_reason, 6) && $await_content__v__closures
				}), $cg__input_on && "a8", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _resume_branch($scope2_id);
			}, 1, "a9", void 0, 1);
			_script($scope1_id, "a12");
			_filled_guard($scope0_reason, 5) && _patch_effect($scope1_id, $cg__input_note ? "ha12" : "ea12", "c");
			_filled_guard($scope0_reason, 5) ? _patch_write($scope1_id, "xc", x, !$sg__input_note) : _patch_init($scope1_id, "a13");
			$cg__input_v && _patch_init($scope1_id, "a14");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 5) && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a11"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.note,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.v,
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 7)) && input.on,
		j: _write_if($scope0_reason, 7) && _unfilled_if($scope0_reason, 7) && $input_on__closures
	}) || (_filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va15", input.note, !$sg__input_note), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "va16", input.v, !$sg__input_v), _filled_guard($scope0_reason, 7) && $cg__input_show && _patch_fill($scope0_id, "va17", input.on, !_server_guard($scope0_reason, 7)), $cg__input_show && _content_withhold(input.on));
}, 1);
