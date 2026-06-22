// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = void 0;
	_html("<div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", void 0, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: mounted });
	_resume_branch($scope0_id);
}, 1);
