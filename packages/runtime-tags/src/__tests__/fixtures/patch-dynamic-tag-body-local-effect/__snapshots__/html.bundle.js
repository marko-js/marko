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
	a: "a !; ;<main></main>",
	a1: "a1 !; b%;<div></div><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			const x = input.note + "!";
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", input.on ? card_default : "div", {}, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_patch_text($scope2_id, "a", x, void 0, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 2) && $if_content__x__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_on && _scope_with_id($scope1_id) }));
			}, $scope1_id), 0, _write_guard($scope0_reason, 3), void 0, 2, $scope0_reason, 3);
			_script($scope1_id, "a3", 1, 1);
			_server_guard($scope0_reason, 2) && _patch_effect($scope1_id, "ea3", "c");
			_filled_guard($scope0_reason, 2) ? _content_withheld("a0", $scope1_id) ? _patch_value($scope1_id, "va4", x) : _patch_write($scope1_id, "wc", x, !_server_guard($scope0_reason, 2)) : _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_note__OR__input_on && _scope_with_id($scope0_id),
				i: _write_if($scope0_reason, 2) && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.note,
		f: _unfilled_if($scope0_reason, 1) && input.on
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va6", input.note, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.on, !_server_guard($scope0_reason, 3)), _client_guard($scope0_reason, 1) && _content_withhold(input.on));
}, 1);
