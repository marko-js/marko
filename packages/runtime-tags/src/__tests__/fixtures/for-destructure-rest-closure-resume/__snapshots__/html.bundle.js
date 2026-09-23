// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 1), $sg__input_lists = _serialize_guard($scope0_reason, 2), $sg__input_items__OR__input_lists = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "a", id, $sg__input_items)}:${_text_resume($scope3_id, "b", rest.extra, $sg__input_items * 2)}</span>`);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			d: id,
			e: rest.extra,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, $sg__input_items, $sg__input_items__OR__input_lists);
	_for_of(input.lists, ([first, ...others]) => {
		const $scope2_id = _scope_id();
		_if(() => {
			{
				const $scope4_id = _scope_id();
				_html(`<b>${_text_resume($scope4_id, "a", first, $sg__input_lists)}${_text_resume($scope4_id, "b", others[0], $sg__input_lists * 2)}</b>`);
				_scope($scope4_id, {});
				return 0;
			}
		}, $scope2_id, "a", 1, 1, 1, 0, 1);
		_scope($scope2_id, {
			d: first,
			e: others[0],
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, $sg__input_lists, $sg__input_items__OR__input_lists);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: show });
}, 1);
