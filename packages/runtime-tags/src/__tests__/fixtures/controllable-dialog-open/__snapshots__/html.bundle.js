// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<dialog${_attr_dialog_open($scope0_id, "a", open, _resume((_new_open) => {
		open = _new_open;
	}, "a0", $scope0_id))}></dialog>${_el_resume($scope0_id, "a")}<span>${_text_resume($scope0_id, "b", String(open))}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
