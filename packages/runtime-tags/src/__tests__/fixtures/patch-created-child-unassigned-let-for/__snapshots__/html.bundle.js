// tags/card.marko
_shells({ b: "b !;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", item)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 0, 0, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb0", items, 1);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_mark($scope0_id, "b", c)}</button>${_el_mark($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", [$fg__input_on && "f", $fg__input_items && "g"], $scope0_reason, 0);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.items,
		i: c
	}) || ($fg__input_on && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 1)), $fg__input_items && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.items, !_server_guard($scope0_reason, 2)));
}, 1);
