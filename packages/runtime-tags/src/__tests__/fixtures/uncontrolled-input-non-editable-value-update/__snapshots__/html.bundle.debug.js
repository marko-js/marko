// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let dynamicType = "hidden";
	let value = "a";
	_html(`<form><input type=button name=button${_attr("value", value)}>${_el_resume($scope0_id, "#input/0")}<input type=checkbox name=checkbox${_attr("value", value)}>${_el_resume($scope0_id, "#input/1")}<input type=hidden name=hidden${_attr("value", value)}>${_el_resume($scope0_id, "#input/2")}<input type=image name=image${_attr("value", value)}>${_el_resume($scope0_id, "#input/3")}<input type=radio name=radio${_attr("value", value)}>${_el_resume($scope0_id, "#input/4")}<input type=reset name=reset${_attr("value", value)}>${_el_resume($scope0_id, "#input/5")}<input type=submit name=submit${_attr("value", value)}>${_el_resume($scope0_id, "#input/6")}<input${_attr_input_value($scope0_id, "#input/7", value)}${_attr("type", dynamicType)} name=dynamic>${_el_resume($scope0_id, "#input/7")}</form><button>Update</button>${_el_resume($scope0_id, "#button/8")}<button>Remove</button>${_el_resume($scope0_id, "#button/9")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
