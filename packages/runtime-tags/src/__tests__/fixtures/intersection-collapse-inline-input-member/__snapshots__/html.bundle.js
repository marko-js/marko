// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const list = input.list;
	_html(`<div>${_text_mark($scope0_id, "a", input.list.length + list.filter((item) => item.on).length + list.length, _write_guard($scope0_reason, 0))}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { e: input.list?.length });
}, 1);
