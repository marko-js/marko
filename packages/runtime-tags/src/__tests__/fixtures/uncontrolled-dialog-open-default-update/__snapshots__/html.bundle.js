// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<dialog></dialog><dialog${_attr_details_or_dialog_open($scope0_id, "a", open)}></dialog>${_el_resume($scope0_id, "a")}<dialog${_attr_details_or_dialog_open($scope0_id, "b", open, void 0)}></dialog>${_el_resume($scope0_id, "b")}<button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
