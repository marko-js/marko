// tags/card.marko
_shells({ b: "b !;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let xs = input.items;
	_for_of(xs, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, (x) => x, $scope0_id, "a", 1, 1, 0, 0, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", xs, 1);
	_scope($scope0_id, { e: input.w }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_items__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		items: input.items,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_items__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.items,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_items__OR__input_w && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_items__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "va1", input.items, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.items), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_items && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_items && _content_withhold(input.w));
}, 1);
