// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		...input.attrs,
		...input.more
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#3_input_more#4");
	_scope($scope0_id, {
		input_attrs: _serialize_if($scope0_reason, 1) && input.attrs,
		input_more: _serialize_if($scope0_reason, 0) && input.more
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		input_more: ["input.more"]
	});
}, 1);
