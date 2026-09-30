// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	const onChange = _resume((next) => {
		out = next;
	}, "__tests__/template.marko_0/onChange", $scope0_id);
	_html(`<input${_attr_input_value($scope0_id, "#input/0", "a", onChange)}>${_el_resume($scope0_id, "#input/0")}<p id=out>${_text_resume($scope0_id, "#text/1", out)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange", "3:18"] });
}, 1);
