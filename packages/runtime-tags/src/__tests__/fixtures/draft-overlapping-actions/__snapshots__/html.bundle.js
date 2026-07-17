// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverTotal = 0;
	let total = serverTotal;
	const addFast = _action(_resume(async () => {
		total = total + 1;
		serverTotal = await resolveAfter(serverTotal + 1, 1);
	}, "a0", $scope0_id));
	const addSlow = _action(_resume(async () => {
		total = total + 10;
		serverTotal = await resolveAfter(serverTotal + 10, 2);
	}, "a1", $scope0_id));
	_html(`<button id=fast>fast</button>${_el_resume($scope0_id, "a")}<button id=slow>slow</button>${_el_resume($scope0_id, "b")}<p id=draft>${_escape(total)}${_el_resume($scope0_id, "c")}</p><p id=server>${_escape(serverTotal)}${_el_resume($scope0_id, "d")}</p><p id=pending>${_escape(String(addFast.pending))}${_el_resume($scope0_id, "e")}/<!>${_escape(String(addSlow.pending))}${_el_resume($scope0_id, "f")}</p>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		g: serverTotal,
		h: total,
		i: addFast,
		k: addSlow
	});
	_resume_branch($scope0_id);
}, 1);
