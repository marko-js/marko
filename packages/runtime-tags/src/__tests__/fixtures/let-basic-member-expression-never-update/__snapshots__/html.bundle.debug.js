// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let index = -1;
	let user = index !== -1 && { id: index };
	_html(`<div>${_escape(user?.id)}</div><button>Update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { index }, "__tests__/template.marko", 0, { index: "1:5" });
	_resume_branch($scope0_id);
}, 1);
