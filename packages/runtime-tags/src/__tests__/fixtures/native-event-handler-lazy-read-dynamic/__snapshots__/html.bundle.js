// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}<button class=bump>bump</button>${_el_resume($scope0_id, "b")}<button class=act>act</button>${_el_resume($scope0_id, "c")}<div class=state>${_escape(true)}${_el_resume($scope0_id, "d")}:<!>${_escape(0)}${_el_resume($scope0_id, "e")}</div><div class=log>${_escape("")}${_el_resume($scope0_id, "f")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: void 0,
		h: void 0,
		i: void 0
	});
	_resume_branch($scope0_id);
}, 1);
