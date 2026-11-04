// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	let items = input.items;
	forOf(items, (item) => {
		_scope_id();
		_html(`<li>${_escape(item)}</li>`);
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { items: input.items }, 0, 0, $wg__input_on__OR__input_items);
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.items
	});
}, 1);
