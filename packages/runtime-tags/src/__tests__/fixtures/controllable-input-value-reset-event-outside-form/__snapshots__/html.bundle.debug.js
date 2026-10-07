// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "init";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/0")}<div class=custom></div><p>${_text_resume($scope0_id, "#text/1", v)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange"] });
}, 1);
