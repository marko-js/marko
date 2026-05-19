// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let index = -1;
	let user = void 0;
	_html(`<div>${_escape(user?.id)}${_el_resume($scope0_id, "a")}</div><div>${_escape(user?.name)}${_el_resume($scope0_id, "b")}</div><button>Update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: index });
	_resume_branch($scope0_id);
}, 1);
