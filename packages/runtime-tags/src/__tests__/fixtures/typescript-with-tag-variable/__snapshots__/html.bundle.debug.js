// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = { y: "hello" };
	_html(_escape(x.y));
	_resume_branch($scope0_id);
}, 1);
