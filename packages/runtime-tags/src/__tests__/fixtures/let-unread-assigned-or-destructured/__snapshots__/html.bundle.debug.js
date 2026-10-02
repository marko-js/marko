// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.start;
	let x = input.x;
	const { p } = x;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 2))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: _write_if($scope0_reason, 1) && input.x,
		input_xChange: _write_if($scope0_reason, 0) && input.xChange
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_xChange: ["input.xChange"]
	});
}, 1);
