// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	forOf(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}</li>`);
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { items: input.items }, 0, 0, $wg__input_on__OR__input_items);
	_html("</main>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_items: _write_if($scope0_reason, 1) && input.items
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_items: ["input.items"]
	});
}, 1);
