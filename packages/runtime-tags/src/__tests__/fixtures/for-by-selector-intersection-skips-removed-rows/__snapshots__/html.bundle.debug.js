// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 4), $wg__input_flag__OR__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.flag ? [] : input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span${item.id === input.sel ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope1_id, "#span/0", $wg__input_sel)}`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			"#LoopKey": _write_if($scope0_reason, 4) && item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { "#LoopKey": ["item.id", "1:6"] });
	}, "id", $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_flag__OR__input_items, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 3) && input.flag,
		input_items: _write_if($scope0_reason, 2) && input.items,
		input_sel: input.sel
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_items: ["input.items"],
		input_sel: ["input.sel"]
	});
}, 1);
