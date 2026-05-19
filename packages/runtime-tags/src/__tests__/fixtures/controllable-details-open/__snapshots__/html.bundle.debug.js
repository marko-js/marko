// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<details${_attr_details_or_dialog_open($scope0_id, "#details/0", open, _resume((_new_open) => {
		open = _new_open;
	}, "__tests__/template.marko_0/openChange", $scope0_id))}><summary></summary></details>${_el_resume($scope0_id, "#details/0")}<span>${_escape(String(open))}${_el_resume($scope0_id, "#text/1")}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
