// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const save = _action(_resume(async () => {
		await resolveAfter(1);
	}, "a0", $scope0_id));
	_html(`<button${_attr("disabled", save.pending)}>save</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { b: save });
	_resume_branch($scope0_id);
}, 1);
