// tags/card.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D ;<li> </li>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = input.items;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</li>`);
		$scope0_page && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", (_mask_group($scope0_reason, 0) & 1) << 1, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.items,
		i: c
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_items && _patch_fill($scope0_id, "va1", input.on, !_server_guard($scope0_reason, 1)), $cg__input_items && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va2", input.items, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.items));
}, 1);
