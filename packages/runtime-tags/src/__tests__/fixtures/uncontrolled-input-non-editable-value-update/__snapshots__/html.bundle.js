// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let dynamicType = "hidden";
	let value = "a";
	_html(`<form><input type=button name=button${_attr("value", value)}>${_el_resume($scope0_id, "a")}<input type=checkbox name=checkbox${_attr("value", value)}>${_el_resume($scope0_id, "b")}<input type=hidden name=hidden${_attr("value", value)}>${_el_resume($scope0_id, "c")}<input type=image name=image${_attr("value", value)}>${_el_resume($scope0_id, "d")}<input type=radio name=radio${_attr("value", value)}>${_el_resume($scope0_id, "e")}<input type=reset name=reset${_attr("value", value)}>${_el_resume($scope0_id, "f")}<input type=submit name=submit${_attr("value", value)}>${_el_resume($scope0_id, "g")}<input${_attr_input_value($scope0_id, "h", value)}${_attr("type", dynamicType)} name=dynamic>${_el_resume($scope0_id, "h")}</form><button>Update</button>${_el_resume($scope0_id, "i")}<button>Remove</button>${_el_resume($scope0_id, "j")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
