// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div id=ref></div><section>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_html("<p>only child</p>");
		_script($scope1_id, "a0");
		writeScope($scope1_id, {});
	}, $scope0_id, "a", show, 1, 1, "</section>", 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
