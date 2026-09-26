// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let v = "init";
	_html(`<button class=show></button>${_el_resume($scope0_id, "#button/0")}<form>`);
	_show_start(visible);
	_html(`<input${_attr_input_value($scope0_id, "#input/2", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/2")}`);
	_show_end($scope0_id, "#text/3", visible, 1, 1, 0, 1);
	_html(`<button type=reset class=reset></button></form><p>${_text_resume($scope0_id, "#text/4", v)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/2": ["valueChange"] });
}, 1);
