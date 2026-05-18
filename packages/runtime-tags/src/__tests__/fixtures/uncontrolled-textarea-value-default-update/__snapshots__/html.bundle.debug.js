// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<textarea>${_escape("a")}</textarea><textarea>${_escape("a")}</textarea><textarea>${_escape(value)}</textarea>${_el_resume($scope0_id, "#textarea/2")}<textarea>${_escape(value)}</textarea>${_el_resume($scope0_id, "#textarea/3")}<textarea>${_attr_textarea_value($scope0_id, "#textarea/4", value, undefined)}</textarea>${_el_resume($scope0_id, "#textarea/4")}<textarea>${_attr_textarea_value($scope0_id, "#textarea/5", value, undefined)}</textarea>${_el_resume($scope0_id, "#textarea/5")}<button>Update</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
