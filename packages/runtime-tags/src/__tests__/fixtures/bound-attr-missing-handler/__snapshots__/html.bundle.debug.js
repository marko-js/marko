// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const state = { x: "v" };
	_html(`<button>inc ${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}<input${_attr_input_value($scope0_id, "#input/2", state.x, state.xChange)}>${_el_resume($scope0_id, "#input/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, {
		n: "1:6",
		"ControlledHandler:#input/2": ["valueChange"]
	});
	_resume_branch($scope0_id);
}, 1);
