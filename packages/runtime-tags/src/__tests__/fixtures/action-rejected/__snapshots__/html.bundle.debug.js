// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const save = _action(_resume(async () => {
		count = count + 1;
		serverCount = await rejectAfter(new Error("save failed"));
	}, "__tests__/template.marko_0/save", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</p><p id=pending>${_escape(String(save.pending))}${_el_resume($scope0_id, "#text/2")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		save
	}, "__tests__/template.marko", 0, {
		count: "5:8",
		save: "6:9"
	});
	_resume_branch($scope0_id);
}, 1);
