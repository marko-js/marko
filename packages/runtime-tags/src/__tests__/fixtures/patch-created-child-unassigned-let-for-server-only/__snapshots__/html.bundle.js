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
_shells({ a: "a;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_items = _unfilled_if($scope0_reason, 0), $ui__input_items = _unfilled_if($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { items: input.items }, 1, 0, 0, $wg__input_on__OR__input_items, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "a0", [$fg__input_on && "d", $fg__input_items && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_items || $ui__input_on__OR__input_items) && input.on,
		e: ($ui__input_on || $ui__input_on__OR__input_items) && input.items
	}) || ($fg__input_on && $ui__input_items && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 1)), $fg__input_items && $ui__input_on && _patch_write($scope0_id, "xe", input.items, !_server_guard($scope0_reason, 2)));
}, 1);
