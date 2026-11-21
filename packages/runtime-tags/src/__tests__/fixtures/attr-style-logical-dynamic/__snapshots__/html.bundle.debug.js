// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(input.on && input.style)}></div>${_el_mark($scope0_id, "#div/0", _write_guard($scope0_reason, 0))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_style: _write_if($scope0_reason, 1) && input.style
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_style: ["input.style"]
	});
}, 1);
