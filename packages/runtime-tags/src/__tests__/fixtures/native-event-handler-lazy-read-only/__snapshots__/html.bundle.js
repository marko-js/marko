// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "a")}<button class=show>show</button>${_el_resume($scope0_id, "b")}<div class=log>${_escape("")}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: void 0,
		e: void 0
	});
	_resume_branch($scope0_id);
}, 1);
