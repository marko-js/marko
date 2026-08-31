// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "v1";
	let wrong = "";
	const key = "v";
	const state = {
		v,
		vChange: _resume(function(x) {
			v = x;
		}, "__tests__/template.marko_0/state", $scope0_id),
		keyChange: _resume(function(x) {
			wrong = x;
		}, "__tests__/template.marko_0/state2", $scope0_id)
	};
	_html(`<div>v=${_text_resume($scope0_id, "#text/0", v, 2)}|wrong=${_text_resume($scope0_id, "#text/1", wrong, 2)}</div><input${_attr_input_value($scope0_id, "#input/2", state[key], state[key + "Change"])}>${_el_resume($scope0_id, "#input/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		key,
		state
	}, "__tests__/template.marko", 0, {
		key: "5:8",
		state: "6:8",
		"ControlledHandler:#input/2": ["valueChange"]
	});
	_resume_branch($scope0_id);
}, 1);
