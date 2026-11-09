// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_list = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const list = input.list;
	_html(`<div>${_text_mark($scope0_id, "#text/0", input.list.length + list.filter((item) => item.on).length + list.length, $wg__input_list)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_input_list#3", $wg__input_list);
	_scope($scope0_id, {
		input_list: input.list,
		input_list_length: _write_if($scope0_reason, 0) && input.list?.length
	}, "__tests__/template.marko", 0, {
		input_list: ["input.list"],
		input_list_length: ["input.list.length"]
	});
}, 1);
