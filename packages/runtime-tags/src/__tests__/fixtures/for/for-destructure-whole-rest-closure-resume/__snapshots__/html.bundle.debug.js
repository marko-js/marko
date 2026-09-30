// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 1), $sg__input_lists = _serialize_guard($scope0_reason, 2), $sg__input_items__OR__input_lists = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, ({ ...all }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<i>${_text_resume($scope3_id, "#text/0", JSON.stringify(all), $sg__input_items)}</i>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			$temp: all,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { $temp: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, $sg__input_items, $sg__input_items__OR__input_lists);
	_for_of(input.lists, ([ ...list]) => {
		const $scope2_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<u>${_text_resume($scope4_id, "#text/0", list.join("+"), $sg__input_lists)}</u>`);
				_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope2_id, {
			$temp2: list,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:2", { $temp2: "6:6" });
	}, 0, $scope0_id, "#text/2", 1, $sg__input_lists, $sg__input_items__OR__input_lists);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
