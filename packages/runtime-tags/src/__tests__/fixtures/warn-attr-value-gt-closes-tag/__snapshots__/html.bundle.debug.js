// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 2;
	_html(`<button${_attr("disabled", count)}>=8 onClick() { count++ }>More</button>`);
	_resume_branch($scope0_id);
}, 1);
