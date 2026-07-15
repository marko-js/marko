// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<form><input${_attr_input_value($scope0_id, "a", value)} type=button name=button>${_el_resume($scope0_id, "a")}<input type=checkbox name=checkbox${_attr("value", value)} checked>${_el_resume($scope0_id, "b")}<input${_attr_input_value($scope0_id, "c", value)} type=hidden name=hidden>${_el_resume($scope0_id, "c")}<input${_attr_input_value($scope0_id, "d", value)} type=image name=image>${_el_resume($scope0_id, "d")}<input type=radio name=radio${_attr("value", value)} checked>${_el_resume($scope0_id, "e")}<input${_attr_input_value($scope0_id, "f", value)} type=reset name=reset>${_el_resume($scope0_id, "f")}<input${_attr_input_value($scope0_id, "g", value)} type=submit name=submit>${_el_resume($scope0_id, "g")}</form><button>Update</button>${_el_resume($scope0_id, "h")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
