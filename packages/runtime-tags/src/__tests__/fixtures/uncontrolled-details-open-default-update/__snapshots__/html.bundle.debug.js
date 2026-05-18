// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<details></details><details${_attr_details_or_dialog_open($scope0_id, "#details/0", open)}></details>${_el_resume($scope0_id, "#details/0")}<details${_attr_details_or_dialog_open($scope0_id, "#details/1", open, undefined)}></details>${_el_resume($scope0_id, "#details/1")}<button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
