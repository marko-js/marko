// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const y = x * 2;
	const z = y * 3;
	_html(`<div>${_escape(z)}</div>`);
	_resume_branch($scope0_id);
}, 1);
