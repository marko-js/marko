// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 1), $wg__input_flag__OR__input_items = _write_guard($scope0_reason, 0), $wi__input_flag__OR__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.flag ? [] : input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "#text/0", input.items[i].name, $wg__input_items)}</span>`);
		$wi__input_flag__OR__input_items && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_flag__OR__input_items, $wg__input_flag__OR__input_items, 0, 0, 1);
	$wi__input_flag__OR__input_items && _scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 1) && input.flag,
		input_items: input.items
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_items: ["input.items"]
	});
}, 1);
