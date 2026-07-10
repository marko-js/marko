// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<div><!--${_escape_comment("")}-->${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
