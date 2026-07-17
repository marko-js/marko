// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverTotal = 0;
	let total = serverTotal;
	const addFast = _action(_resume(async () => {
		total = total + 1;
		serverTotal = await resolveAfter(serverTotal + 1, 1);
	}, "__tests__/template.marko_0/addFast", $scope0_id));
	const addSlow = _action(_resume(async () => {
		total = total + 10;
		serverTotal = await resolveAfter(serverTotal + 10, 2);
	}, "__tests__/template.marko_0/addSlow", $scope0_id));
	_html(`<button id=fast>fast</button>${_el_resume($scope0_id, "#button/0")}<button id=slow>slow</button>${_el_resume($scope0_id, "#button/1")}<p id=draft>${_escape(total)}${_el_resume($scope0_id, "#text/2")}</p><p id=server>${_escape(serverTotal)}${_el_resume($scope0_id, "#text/3")}</p><p id=pending>${_escape(String(addFast.pending))}${_el_resume($scope0_id, "#text/4")}/<!>${_escape(String(addSlow.pending))}${_el_resume($scope0_id, "#text/5")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_addSlow");
	_script($scope0_id, "__tests__/template.marko_0_addFast");
	writeScope($scope0_id, {
		serverTotal,
		total,
		addFast,
		addSlow
	}, "__tests__/template.marko", 0, {
		serverTotal: "4:6",
		total: "5:8",
		addFast: "6:9",
		addSlow: "10:9"
	});
	_resume_branch($scope0_id);
}, 1);
