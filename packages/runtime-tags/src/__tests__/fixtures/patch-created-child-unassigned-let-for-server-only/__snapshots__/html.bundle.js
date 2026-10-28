// tags/card.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D ;<li> </li>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", (_mask_group($scope0_reason, 0) & 1) << 1, 0);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, $wg__input_on__OR__input_items, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.items
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_items && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_items && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va1", input.items, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.items));
}, 1);
