// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let rows = input.items;
	_for_of(rows, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</li>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_w, 0, 0, 0, 1);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w__OR__input_items = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id();
			card_default({
				w: input.w,
				items: input.items
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_w__OR__input_items && _scope_with_id($scope0_id),
				a: $wi__input_w__OR__input_items && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_on);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.w,
		f: input.items
	});
}, 1);
