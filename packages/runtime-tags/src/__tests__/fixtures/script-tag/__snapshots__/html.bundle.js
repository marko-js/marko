// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html("<div id=ref>0</div>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { a: x });
	_resume_branch($scope0_id);
}, 1);
