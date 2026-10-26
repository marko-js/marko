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
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !; ;<main></main>",
	a7: "a7 !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_rows__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const $scope2_page = _page_render();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 4)} ${_patch_text($scope2_id, "b", row.label, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "a1" : "a2");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_rows ? "a3" : "a4");
			$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $for_content__row_label__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_on__OR__input_note && _scope_with_id($scope1_id) })));
		}, $scope1_id, ($scope) => $scope0_page ? [{ f: input.note }, {
			d: row?.label,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 3);
		_filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope1_id) && _patch_fill($scope1_id, "va5", row?.label);
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a6");
		$scope0_page && $wi__input_rows__OR__input_on__OR__input_note && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && row?.label,
			_: _scope_with_id($scope0_id),
			i: _write_if($scope0_reason, 2) && $for_content__row_label__closures
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a7", $scope0_reason, 2);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_rows && _patch_fill($scope0_id, "va8", input.on, !_server_guard($scope0_reason, 3)), $cg__input_rows && _content_withhold(input.on), _filled_guard($scope0_reason, 4) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va9", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
