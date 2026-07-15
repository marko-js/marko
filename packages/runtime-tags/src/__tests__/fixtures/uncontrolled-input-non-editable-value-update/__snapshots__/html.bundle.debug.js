// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<form><input${_attr_input_value($scope0_id, "#input/0", value)} type=button name=button>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_value($scope0_id, "#input/1", value)} type=checkbox name=checkbox>${_el_resume($scope0_id, "#input/1")}<input${_attr_input_value($scope0_id, "#input/2", value)} type=hidden name=hidden>${_el_resume($scope0_id, "#input/2")}<input${_attr_input_value($scope0_id, "#input/3", value)} type=image name=image>${_el_resume($scope0_id, "#input/3")}<input${_attr_input_value($scope0_id, "#input/4", value)} type=radio name=radio>${_el_resume($scope0_id, "#input/4")}<input${_attr_input_value($scope0_id, "#input/5", value)} type=reset name=reset>${_el_resume($scope0_id, "#input/5")}<input${_attr_input_value($scope0_id, "#input/6", value)} type=submit name=submit>${_el_resume($scope0_id, "#input/6")}</form><button>Update</button>${_el_resume($scope0_id, "#button/7")}<button>Remove</button>${_el_resume($scope0_id, "#button/8")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
