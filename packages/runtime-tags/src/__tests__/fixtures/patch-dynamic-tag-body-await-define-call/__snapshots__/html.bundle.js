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
	a1: "a1;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 6), $wi__input_show__OR__input_v__OR__input_on = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 3)}</em>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a5");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.v, (v) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					const $childScope = _patch_child($scope4_id, "a", $scope0_id);
					Body.content({});
					_scope($scope4_id, { a: _existing_scope($childScope) });
				}, $scope3_id), 0, $wg__input_on, void 0, 2, $scope0_reason, 6);
				_filled_guard($scope0_reason, 3) && _content_withheld("a0", $scope3_id) && _patch_value($scope0_id, "va6", input.note);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope3_id, "a7");
				$wi__input_show__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 6) && $input_on__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 6) && "a7", $wg__input_on);
				$wg__input_on || $wi__input_show__OR__input_v__OR__input_on && _resume_branch($scope3_id);
			}, 1, "a1", void 0, 1);
			$wi__input_show__OR__input_v__OR__input_on && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.note,
		f: _unfilled_if($scope0_reason, 4) && input.v,
		g: _unfilled_if($scope0_reason, 0) && input.on,
		h: _write_if($scope0_reason, 3) && $input_note__closures,
		j: _write_if($scope0_reason, 6) && _unfilled_if($scope0_reason, 6) && $input_on__closures
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va8", input.note, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va9", input.v, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va10", input.on, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 4) && _content_withhold(input.on));
}, 1);
