// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let index = -1;
	let user = index !== -1 && { id: index };
	_html(`<div>${_escape(user?.id)}</div><button>Update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: index });
	_resume_branch($scope0_id);
}, 1);
