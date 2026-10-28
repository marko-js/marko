// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let xs = input.items;
	_for_of(xs, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(x)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (x) => x, $scope0_id, "a", $wg__input_w, 0, 0, 0, 1);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_items__OR__input_w = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		items: input.items,
		w: input.w
	}, 0, 0, $wg__input_on__OR__input_items__OR__input_w);
	_html("</main>");
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.items,
		f: _write_if($scope0_reason, 0) && input.w
	});
}, 1);
