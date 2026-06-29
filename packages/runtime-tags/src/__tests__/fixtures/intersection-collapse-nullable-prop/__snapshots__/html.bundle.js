// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	const obj = show;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>${_escape((obj?.label ?? "none") + 2)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
