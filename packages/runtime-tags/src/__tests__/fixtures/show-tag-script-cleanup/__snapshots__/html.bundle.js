// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		let id = 0;
		_html(`<button id=next>next</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_script($scope1_id, "a1");
		writeScope($scope1_id, { b: id });
	}, $scope0_id, "a", show, void 0, void 0, 0, 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
