// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<textarea>${_escape_textarea("a")}</textarea><textarea>${_escape_textarea("a")}</textarea><textarea>${_escape_textarea(value)}</textarea>${_el_resume($scope0_id, "c")}<textarea>${_escape_textarea(value)}</textarea>${_el_resume($scope0_id, "d")}<textarea>${_attr_textarea_value($scope0_id, "e", value, void 0)}</textarea>${_el_resume($scope0_id, "e")}<textarea>${_attr_textarea_value($scope0_id, "f", value, void 0)}</textarea>${_el_resume($scope0_id, "f")}<button>Update</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
