// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const step = _action(_resume(async () => {
		count = count + 1;
		serverCount = await resolveAfter(serverCount + 1, 1);
	}, "a0", $scope0_id));
	const run = _action(_resume(async () => {
		await step();
		count = count + 10;
		serverCount = await resolveAfter(serverCount + 10, 2);
	}, "a1", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "b")}</p><p id=server>${_escape(serverCount)}${_el_resume($scope0_id, "c")}</p><p id=pending>${_escape(String(step.pending))}${_el_resume($scope0_id, "d")}/<!>${_escape(String(run.pending))}${_el_resume($scope0_id, "e")}</p>`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		f: serverCount,
		g: count,
		h: step,
		j: run
	});
	_resume_branch($scope0_id);
}, 1);
