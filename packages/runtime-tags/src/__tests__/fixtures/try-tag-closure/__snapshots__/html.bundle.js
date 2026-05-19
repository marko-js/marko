// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = "Hello";
	_try($scope0_id, "a", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_escape(value));
		_resume_branch($scope1_id);
	}, $scope0_id), {});
}, 1);
