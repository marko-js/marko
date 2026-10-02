// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	input.start;
	const { p } = input.x;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 2))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.x,
		g: _write_if($scope0_reason, 0) && input.xChange
	});
}, 1);
