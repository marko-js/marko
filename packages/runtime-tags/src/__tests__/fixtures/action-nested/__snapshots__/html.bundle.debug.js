// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const step = _action(_resume(async () => {
		count = count + 1;
		serverCount = await resolveAfter(serverCount + 1, 1);
	}, "__tests__/template.marko_0/step", $scope0_id));
	const run = _action(_resume(async () => {
		await step();
		count = count + 10;
		serverCount = await resolveAfter(serverCount + 10, 2);
	}, "__tests__/template.marko_0/run", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</p><p id=server>${_escape(serverCount)}${_el_resume($scope0_id, "#text/2")}</p><p id=pending>${_escape(String(step.pending))}${_el_resume($scope0_id, "#text/3")}/<!>${_escape(String(run.pending))}${_el_resume($scope0_id, "#text/4")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_run");
	writeScope($scope0_id, {
		serverCount,
		count,
		step,
		run
	}, "__tests__/template.marko", 0, {
		serverCount: "4:6",
		count: "5:8",
		step: "6:9",
		run: "10:9"
	});
	_resume_branch($scope0_id);
}, 1);
