// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverStatus = "saved";
	let status = serverStatus;
	const save = _action(_resume(async () => {
		status = "saving";
		await resolveAfter(1, 1);
		status = "syncing";
		serverStatus = await resolveAfter("saved again", 2);
	}, "__tests__/template.marko_0/save", $scope0_id));
	_html(`<button${_attr("disabled", save.pending)}>save</button>${_el_resume($scope0_id, "#button/0")}<p id=status>${_escape(status)}${_el_resume($scope0_id, "#text/1")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_save");
	writeScope($scope0_id, { save }, "__tests__/template.marko", 0, { save: "6:9" });
	_resume_branch($scope0_id);
}, 1);
