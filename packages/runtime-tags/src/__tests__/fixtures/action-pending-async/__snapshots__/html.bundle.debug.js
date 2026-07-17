// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const save = _action(_resume(async () => {
		await resolveAfter(1);
	}, "__tests__/template.marko_0/save", $scope0_id));
	_html(`<button${_attr("disabled", save.pending)}>save</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_save");
	writeScope($scope0_id, { save }, "__tests__/template.marko", 0, { save: "4:9" });
	_resume_branch($scope0_id);
}, 1);
