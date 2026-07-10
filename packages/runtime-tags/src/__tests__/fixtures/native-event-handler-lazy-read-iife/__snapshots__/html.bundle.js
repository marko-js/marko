// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=bump>bump</button>${_el_resume($scope0_id, "a")}<button class=snap>snap</button>${_el_resume($scope0_id, "b")}<div class=n>${_escape(0)}${_el_resume($scope0_id, "c")}</div><div class=log>${_escape("")}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: void 0,
		f: void 0
	});
	_resume_branch($scope0_id);
}, 1);
