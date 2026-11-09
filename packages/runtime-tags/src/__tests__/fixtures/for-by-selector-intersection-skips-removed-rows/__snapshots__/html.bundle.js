// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 4), $wg__input_flag__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.flag ? [] : input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span${item.id === input.sel ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope1_id, "a", $wg__input_sel)}`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			M: _write_if($scope0_reason, 4) && item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_flag__OR__input_items, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 3) && input.flag,
		e: _write_if($scope0_reason, 2) && input.items,
		g: input.sel
	});
}, 1);
