// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_list = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const list = input.list;
	_html(`<div>${_text_mark($scope0_id, "a", input.list.length + list.filter((item) => item.on).length + list.length, $wg__input_list)}</div>`);
	_script($scope0_id, "a0", $wg__input_list);
	_scope($scope0_id, {
		d: input.list,
		e: _write_if($scope0_reason, 0) && input.list?.length
	});
}, 1);
