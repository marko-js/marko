// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.a ? "A" : input.b ? "B" : "C", _write_guard($scope0_reason, 0))}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.a,
		e: _write_if($scope0_reason, 1) && input.b
	});
}, 1);
