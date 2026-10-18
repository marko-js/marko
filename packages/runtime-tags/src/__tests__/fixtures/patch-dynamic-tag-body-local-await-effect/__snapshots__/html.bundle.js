// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1 !;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a2: "a2 !;b%;<!><!><!>",
	a3: "a3 !; b%;<div></div><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 7), $wi__input_show__OR__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4);
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
				_dynamic_tag($scope2_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<em>${_patch_text($scope3_id, "a", x, void 0, $scope0_reason, 5)} ${_patch_text($scope3_id, "b", v, 2, $scope0_reason, 6)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, "a4");
					_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, "a5");
					_subscribe(_unfilled_if($scope0_reason, 6) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $if_content__x__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id) })));
				}, $scope2_id, ($scope) => $scope0_page ? [{ c: v }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 7);
				_filled_guard($scope0_reason, 6) && _content_withheld("a0", $scope2_id) && _patch_value($scope2_id, "va6", v);
				_filled_guard($scope0_reason, 5) && _content_withheld("a0", $scope2_id) && _patch_value($scope1_id, "va7", x);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope2_id, "a8");
				$wi__input_show__OR__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 7) && $input_on__closures, _scope($scope2_id, {
					c: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 6)) && v,
					_: _scope_with_id($scope1_id),
					l: _write_if($scope0_reason, 6) && $await_content__v__closures
				}), _client_guard($scope0_reason, 7) && "a8", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _resume_branch($scope2_id);
			}, 1, "a1");
			_script($scope1_id, "a9", 1, 1);
			_server_guard($scope0_reason, 5) && _patch_effect($scope1_id, "ea9", "c");
			_filled_guard($scope0_reason, 5) ? _patch_write($scope1_id, "wc", x, !_server_guard($scope0_reason, 5)) : _patch_init($scope1_id, "a10");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 5) && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 4) && input.note,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.v,
		g: _unfilled_if($scope0_reason, 0) && input.on,
		j: _write_if($scope0_reason, 7) && _unfilled_if($scope0_reason, 7) && $input_on__closures
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va11", input.note, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va12", input.v, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va13", input.on, !_server_guard($scope0_reason, 7)), _client_guard($scope0_reason, 4) && _content_withhold(input.on));
}, 1);
