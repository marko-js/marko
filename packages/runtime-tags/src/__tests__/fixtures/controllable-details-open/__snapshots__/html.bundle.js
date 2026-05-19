// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<details${_attr_details_or_dialog_open($scope0_id, "a", open, _resume((_new_open) => {
		open = _new_open;
	}, "a0", $scope0_id))}><summary></summary></details>${_el_resume($scope0_id, "a")}<span>${_escape(String(open))}${_el_resume($scope0_id, "b")}</span>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
