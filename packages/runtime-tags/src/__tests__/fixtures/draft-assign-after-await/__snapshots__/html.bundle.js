// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverStatus = "saved";
	let status = serverStatus;
	const save = _action(_resume(async () => {
		status = "saving";
		await resolveAfter(1, 1);
		status = "syncing";
		serverStatus = await resolveAfter("saved again", 2);
	}, "a0", $scope0_id));
	_html(`<button${_attr("disabled", save.pending)}>save</button>${_el_resume($scope0_id, "a")}<p id=status>${_escape(status)}${_el_resume($scope0_id, "b")}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { e: save });
	_resume_branch($scope0_id);
}, 1);
