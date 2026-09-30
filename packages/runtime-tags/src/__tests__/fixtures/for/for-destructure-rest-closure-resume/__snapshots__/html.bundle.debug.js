// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 1), $sg__input_lists = _serialize_guard($scope0_reason, 2), $sg__input_items__OR__input_lists = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "#text/0", id, $sg__input_items)}:${_text_resume($scope3_id, "#text/1", rest.extra, $sg__input_items * 2)}</span>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			id,
			$temp_extra: rest.extra,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", {
			id: "3:8",
			$temp_extra: ["$temp.extra", "3:6"]
		});
	}, 0, $scope0_id, "#text/1", 1, $sg__input_items, $sg__input_items__OR__input_lists);
	_for_of(input.lists, ([first, ...others]) => {
		const $scope2_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<b>${_text_resume($scope4_id, "#text/0", first, $sg__input_lists)}${_text_resume($scope4_id, "#text/1", others[0], $sg__input_lists * 2)}</b>`);
				_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope2_id, {
			first,
			$temp2_1: others[0],
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:2", {
			first: "6:7",
			$temp2_1: ["$temp2[1]", "6:6"]
		});
	}, 0, $scope0_id, "#text/2", 1, $sg__input_lists, $sg__input_items__OR__input_lists);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
