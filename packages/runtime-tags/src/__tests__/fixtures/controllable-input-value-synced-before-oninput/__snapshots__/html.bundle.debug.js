// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let q = "";
	_html(`<input class=first>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", q, _resume((_new_q) => {
		q = _new_q;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))} class=ctrl>${_el_resume($scope0_id, "#input/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { q }, "__tests__/template.marko", 0, {
		q: "1:6",
		"ControlledHandler:#input/1": ["valueChange"]
	});
}, 1);
