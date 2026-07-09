// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let label = 0;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_script($scope1_id, "a0");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, "a", show);
	_html(`<button id=bump>bump</button>${_el_resume($scope0_id, "b")}<button id=toggle>Toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: show,
		e: label
	});
	_resume_branch($scope0_id);
}, 1);
