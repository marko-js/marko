// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<div>${_escape(x)}</div>`);
	_resume_branch($scope0_id);
}, 1);
