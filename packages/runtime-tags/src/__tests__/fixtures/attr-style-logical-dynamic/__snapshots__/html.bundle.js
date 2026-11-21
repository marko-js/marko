// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(input.on && input.style)}></div>${_el_mark($scope0_id, "a", _write_guard($scope0_reason, 0))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.style
	});
}, 1);
